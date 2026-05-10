import { lazy, Suspense, useEffect } from 'react';

const MUSIC_URL = import.meta.env.VITE_MUSIC_REMOTE_URL || 'http://localhost:3002';

const MusicApp = lazy(() => import('music/MusicApp'));

export default function MusicPage() {
  useEffect(() => {
    // Always load the compiled CSS from the music app's preview/build server.
    // In production/dev, the URL points to the same asset.
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${MUSIC_URL}/assets/style.css`;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
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
