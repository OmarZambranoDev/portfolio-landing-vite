/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useEffect, useState } from 'react';

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
  const [ready, setReady] = useState(false);
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
    const timer = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-dvh">
          <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      {ready ? (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <MusicApp />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </Suspense>
  );
}
