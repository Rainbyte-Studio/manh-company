/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AppProvider, useApp } from './i18n/LanguageContext';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { MarineIndustrialPage } from './pages/MarineIndustrialPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RealEstatePage } from './pages/RealEstatePage';

const MainRouter: React.FC = () => {
  const { route } = useApp();

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <AboutPage />;
      case '/marine-industrial':
        return <MarineIndustrialPage />;
      case '/real-estate':
        return <RealEstatePage />;
      case '/projects':
        return <ProjectsPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4F0] text-[#111820]">
      <Header />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}
