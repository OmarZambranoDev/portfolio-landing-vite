/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useEffect } from 'react';

const MUSIC_URL = import.meta.env.VITE_MUSIC_REMOTE_URL || 'http://localhost:3002';

const MusicApp = React.lazy(() => {
  return import(/* @vite-ignore */ `${MUSIC_URL}/remoteEntry.js`)
    .then((container: any) => container.get('./MusicApp'))
    .then((factory: any) => {
      const Module = factory();
      return { default: Module.default || Module };
    });
});

function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default function MusicPage() {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${MUSIC_URL}/assets/style.css`;
    document.head.appendChild(link);

    // Fix viewport height
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => {
      document.head.removeChild(link);
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-full">
            <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <MusicApp />
      </Suspense>
    </div>
  );
}
