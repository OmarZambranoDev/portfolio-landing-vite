import { useParams } from 'react-router-dom';
import { Home } from 'lucide-react';

const remoteUrls: Record<string, string> = {
  music: import.meta.env.VITE_MUSIC_REMOTE_URL || 'http://localhost:3002',
  shop: import.meta.env.VITE_SHOP_REMOTE_URL || 'http://localhost:3003',
  trade: import.meta.env.VITE_TRADE_REMOTE_URL || 'http://localhost:3004',
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const remoteUrl = slug ? remoteUrls[slug] : undefined;

  if (!remoteUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
        <div className="text-center">
          <p className="text-earth-moss mb-4">Project not found.</p>
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
        <iframe
          src={remoteUrl}
          className="w-full h-full min-h-[calc(100vh-80px)] border-0"
          title={`${slug} project`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}
