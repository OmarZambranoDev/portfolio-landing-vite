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

export default function MusicPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${MUSIC_URL}/assets/style.css`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.height = `${window.innerHeight}px`;
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <MusicApp />
    </Suspense>
  );
}
