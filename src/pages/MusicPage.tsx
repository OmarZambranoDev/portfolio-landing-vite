/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Home } from 'lucide-react';

export default function MusicPage() {
  const [App, setApp] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const musicUrl = import.meta.env.VITE_MUSIC_REMOTE_URL || 'http://localhost:3002';

    import(/* @vite-ignore */ `${musicUrl}/remoteEntry.js`)
      .then((container: any) => container.get('./MusicApp'))
      .then((factory: any) => {
        const Module = factory();
        setApp(() => Module.default || Module);
      })
      .catch((err: Error) => {
        setError(`Failed to load Music app: ${err.message}`);
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
        <div className="text-center">
          <p className="text-earth-moss mb-4">{error}</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-earth-moss hover:text-earth-forest hover:bg-muted/10 transition-colors"
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Omar's Portfolio</span>
          </a>
        </div>
      </div>
    );
  }

  if (!App) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
        <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20 flex flex-col">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <a
          href="/"
          aria-label="Back to Portfolio"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-earth-moss hover:text-earth-forest hover:bg-muted/10 transition-colors"
        >
          <Home className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">Omar's Portfolio</span>
        </a>
      </div>
      <div className="flex-1">
        <App />
      </div>
    </div>
  );
}
