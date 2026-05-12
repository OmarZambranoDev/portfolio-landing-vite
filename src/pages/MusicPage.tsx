/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

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
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${MUSIC_URL}/assets/style.css`;
    document.head.appendChild(link);

    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.inset = '0';
    document.body.appendChild(div);
    setContainer(div);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(div);
    };
  }, []);

  if (!container) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return createPortal(
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full">
          <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <MusicApp />
    </Suspense>,
    container
  );
}
