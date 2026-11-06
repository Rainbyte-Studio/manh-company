import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
  theme?: 'dark' | 'light';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden',
  priority = false,
  fallbackLabel = 'MANH COMPANY',
  theme = 'dark',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`${containerClassName} ${
        theme === 'dark' ? 'bg-[#111820]' : 'bg-[#E8E6DF]'
      }`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-8 text-center select-none ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#111820] via-[#18222D] to-[#111820] text-[#F5F4F0]'
              : 'bg-gradient-to-br from-[#F5F4F0] via-[#EAE8E1] to-[#E2DFD7] text-[#111820]'
          }`}
        >
          <div className="w-10 h-[1px] bg-[#B19A75] mb-4" />
          <span className="font-display text-lg font-bold tracking-[0.2em] uppercase">
            {fallbackLabel}
          </span>
          <span className="mt-1.5 text-xs text-[#65747F] max-w-xs line-clamp-2">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
