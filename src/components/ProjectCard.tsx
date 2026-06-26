import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '@OmarZambranoDev/portfolio-ui';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  repoUrl: string;
  path?: string;
  externalUrl?: string;
  builtWith?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  icon: Icon,
  repoUrl,
  path,
  externalUrl,
  builtWith,
}: ProjectCardProps) {
  const navigate = useNavigate();
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);

  const handleOpenApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent);
    if (isMobile && path) {
      setNavigatingTo(title);
      setTimeout(() => navigate(path), 500);
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <>
      <Card
        variant="elevated"
        className="bg-white border border-earth-stone/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-earth-sage/50 flex flex-col h-full"
      >
        <div className="h-40 bg-gradient-to-br from-earth-forest to-earth-sage flex items-center justify-center relative">
          <Icon size={48} className="text-earth-stone" aria-hidden="true" />
          {builtWith && (
            <span className="absolute top-3 right-3 text-xs px-2 py-1 bg-white/20 text-white rounded-full backdrop-blur-sm">
              Built with {builtWith}
            </span>
          )}
        </div>
        <CardContent className="flex-1">
          <h3 className="text-xl font-bold text-earth-forest mb-1">{title}</h3>
          <CardDescription className="text-earth-moss">{description}</CardDescription>
          <div className="flex flex-wrap gap-1 mt-3">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 bg-earth-stone/20 text-earth-forest rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 w-full">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-earth-sage text-earth-forest hover:bg-earth-stone/20"
                aria-label={`View ${title} source code on GitHub`}
              >
                GitHub
              </Button>
            </a>
            {externalUrl ? (
              <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-earth-forest hover:bg-earth-moss border-earth-forest text-white"
                  aria-label={`Open ${title} demo`}
                >
                  Open App
                </Button>
              </a>
            ) : path ? (
              <a href={path} onClick={handleOpenApp} className="flex-1">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-earth-forest hover:bg-earth-moss border-earth-forest text-white"
                  aria-label={`Open ${title} demo`}
                >
                  Open App
                </Button>
              </a>
            ) : null}
          </div>
        </CardFooter>
      </Card>

      {navigatingTo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-earth-forest border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-earth-forest font-medium">Navigating to {navigatingTo}...</p>
          </div>
        </div>
      )}
    </>
  );
}
