import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Simple in-memory rate limiter per IP for spam protection
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 8;

interface ContactSubmission {
  referenceId: string;
  submittedAt: string;
  fullName: string;
  email: string;
  company: string;
  sector: 'marine' | 'real-estate' | 'general';
  subject: string;
  message: string;
  privacyConsent: boolean;
  language: 'en' | 'el';
  recipientEntity: string;
}

function ensureDataStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

async function startServer() {
  ensureDataStore();
  const app = express();
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'MANH Company Corporate Portal API',
      timestamp: new Date().toISOString(),
    });
  });

  app.post('/api/contact', (req, res) => {
    try {
      const clientIp =
        (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        'unknown';

      const now = Date.now();
      const rateRecord = rateLimitMap.get(clientIp);
      if (rateRecord && now < rateRecord.resetAt) {
        if (rateRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          return res.status(429).json({
            ok: false,
            code: 'RATE_LIMITED',
            error:
              'Too many submissions from this connection. Please wait a few minutes before trying again.',
          });
        }
        rateRecord.count += 1;
      } else {
        rateLimitMap.set(clientIp, {
          count: 1,
          resetAt: now + RATE_LIMIT_WINDOW_MS,
        });
      }

      const {
        fullName,
        email,
        company,
        sector,
        subject,
        message,
        privacyConsent,
        language,
        websiteHoneypot,
      } = req.body || {};

      // Honeypot spam protection: if filled by a bot, reject silently
      if (typeof websiteHoneypot === 'string' && websiteHoneypot.trim().length > 0) {
        return res.status(400).json({
          ok: false,
          code: 'SPAM_DETECTED',
          error: 'Automated submission rejected.',
        });
      }

      const cleanName = typeof fullName === 'string' ? fullName.trim() : '';
      const cleanEmail = typeof email === 'string' ? email.trim() : '';
      const cleanCompany = typeof company === 'string' ? company.trim() : '';
      const cleanSector =
        sector === 'marine' || sector === 'real-estate' || sector === 'general'
          ? sector
          : '';
      const cleanSubject = typeof subject === 'string' ? subject.trim() : '';
      const cleanMessage = typeof message === 'string' ? message.trim() : '';
      const cleanLang = language === 'el' ? 'el' : 'en';

      if (cleanName.length < 2 || cleanName.length > 120) {
        return res.status(400).json({
          ok: false,
          code: 'INVALID_NAME',
          error:
            cleanLang === 'el'
              ? 'Παρακαλούμε συμπληρώστε έγκυρο ονοματεπώνυμο (2–120 χαρακτήρες).'
              : 'Please provide a valid full name (2–120 characters).',
        });
      }

      if (!isValidEmail(cleanEmail) || cleanEmail.length > 160) {
        return res.status(400).json({
          ok: false,
          code: 'INVALID_EMAIL',
          error:
            cleanLang === 'el'
              ? 'Παρακαλούμε συμπληρώστε έγκυρη διεύθυνση email.'
              : 'Please provide a valid email address.',
        });
      }

      if (!cleanSector) {
        return res.status(400).json({
          ok: false,
          code: 'INVALID_SECTOR',
          error:
            cleanLang === 'el'
              ? 'Παρακαλούμε επιλέξτε τομέα υπηρεσιών.'
              : 'Please select a service sector.',
        });
      }

      if (cleanSubject.length < 3 || cleanSubject.length > 180) {
        return res.status(400).json({
          ok: false,
          code: 'INVALID_SUBJECT',
          error:
            cleanLang === 'el'
              ? 'Παρακαλούμε συμπληρώστε θέμα (τουλάχιστον 3 χαρακτήρες).'
              : 'Please provide a subject (at least 3 characters).',
        });
      }

      if (cleanMessage.length < 10 || cleanMessage.length > 4000) {
        return res.status(400).json({
          ok: false,
          code: 'INVALID_MESSAGE',
          error:
            cleanLang === 'el'
              ? 'Παρακαλούμε συμπληρώστε αναλυτικό μήνυμα (τουλάχιστον 10 χαρακτήρες).'
              : 'Please provide a detailed message (at least 10 characters).',
        });
      }

      if (privacyConsent !== true) {
        return res.status(400).json({
          ok: false,
          code: 'CONSENT_REQUIRED',
          error:
            cleanLang === 'el'
              ? 'Απαιτείται η αποδοχή της Πολιτικής Απορρήτου.'
              : 'Acceptance of the Privacy Policy is required.',
        });
      }

      const recipientEntity =
        cleanSector === 'marine'
          ? 'MANH Company — Marine & Industrial Services'
          : cleanSector === 'real-estate'
          ? 'MANH Company — Real Estate & Asset Management'
          : 'MANH Company';

      const timestamp = new Date().toISOString();
      const referenceId = `MH-${timestamp.slice(0, 10).replace(/-/g, '')}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;

      const submission: ContactSubmission = {
        referenceId,
        submittedAt: timestamp,
        fullName: cleanName,
        email: cleanEmail,
        company: cleanCompany,
        sector: cleanSector,
        subject: cleanSubject,
        message: cleanMessage,
        privacyConsent: true,
        language: cleanLang,
        recipientEntity,
      };

      ensureDataStore();
      const existingRaw = fs.readFileSync(INQUIRIES_FILE, 'utf8');
      const existingList: ContactSubmission[] = JSON.parse(existingRaw || '[]');
      existingList.unshift(submission);
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existingList, null, 2), 'utf8');

      return res.status(201).json({
        ok: true,
        referenceId,
        submittedAt: timestamp,
        recipientEntity,
      });
    } catch (err) {
      console.error('Error processing contact inquiry:', err);
      return res.status(500).json({
        ok: false,
        code: 'SERVER_ERROR',
        error: 'An unexpected server error occurred while recording your inquiry.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MANH Company server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
