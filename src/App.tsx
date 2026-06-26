import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chip } from '@OmarZambranoDev/portfolio-ui';
import { Music, TrendingUp, Users, Globe, Package } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import MusicPage from './pages/MusicPage';
import TradePage from './pages/TradePage';
import SocialPage from './pages/SocialPage';

function HomePage() {
  const projects = [
    {
      title: 'UI Component Library',
      description:
        'A shared React component library published to GitHub Packages and consumed across all portfolio applications. Features 20+ accessible components built on Radix UI primitives, an earth-tone design system, Storybook documentation, and a react-server export condition for Next.js server component compatibility.',
      tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Radix UI',
        'class-variance-authority',
        'Lucide React',
        'Storybook',
        'tsup',
        'GitHub Packages',
      ],
      builtWith: 'DeepSeek',
      icon: Package,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-ui',
    },
    {
      title: 'Music Player',
      description:
        'A Spotify-inspired music player with playlist management, mock audio playback, and persistent state. Features 200 tracks and mobile-responsive design.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Module Federation',
        'Tailwind CSS',
        'Zustand',
        'Playwright',
        'Vitest',
        'GitHub Actions',
      ],
      builtWith: 'DeepSeek',
      icon: Music,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-music',
      path: '/music',
    },
    {
      title: 'Trade App',
      description:
        'A real-time stock trading simulator with interactive charts, portfolio tracking, and trade execution. Features live market data simulation, watchlist management, and mobile-responsive design.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Module Federation',
        'Tailwind CSS',
        'Zustand',
        'Lightweight Charts',
        'Playwright',
        'Vitest',
        'GitHub Actions',
      ],
      builtWith: 'DeepSeek',
      icon: TrendingUp,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-trade',
      path: '/trade',
    },
    {
      title: 'Social App',
      description:
        'A Twitter-style social feed with following system, post creation, likes, comments, notifications, and user search. Features infinite scroll, optimistic updates, and real-time interaction simulation across desktop and mobile layouts.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Module Federation',
        'Tailwind CSS',
        'Zustand',
        'Vitest',
        'Playwright',
        'GitHub Actions',
      ],
      builtWith: 'DeepSeek',
      icon: Users,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-social',
      path: '/social',
    },
    {
      title: 'Travel App',
      description:
        'An AI-powered travel planning app with SSR destination pages, streaming itinerary generation, live weather, and interactive maps. Features curated destinations, saved trips with local persistence, and responsive desktop and mobile layouts.',
      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Vercel AI SDK',
        'React Leaflet',
        'Playwright',
        'Vitest',
        'GitHub Actions',
      ],
      builtWith: 'Claude',
      icon: Globe,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-travel',
      externalUrl: 'https://travel.omarzambrano.dev/',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
      {/* Hero Section */}
      <section className="border-b border-earth-stone/30">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-forest mb-4">Omar Zambrano</h1>
          <p className="text-xl text-earth-sage font-medium mb-4">Senior React Engineer</p>
          <p className="text-lg text-earth-moss">
            Frontend engineer with 7 years of experience building large-scale applications at
            Walmart. Exploring micro-frontend architecture, Next.js, and AI-integrated development
            through a series of production-quality portfolio projects.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-4">About This Portfolio</h2>
        <p className="text-earth-moss leading-relaxed">
          I built this portfolio to explore modern frontend architecture patterns, starting with
          micro-frontend development using Vite and Module Federation, and expanding into Next.js
          server components, API routes, and AI-integrated features.
        </p>
        <br />
        <p className="text-earth-moss leading-relaxed">
          Each project is built end-to-end, from architecture decisions through testing and
          deployment. I use AI coding assistants as development accelerators, handling
          implementation details while I retain full ownership of architecture, code quality, and
          engineering decisions. Each project card notes which AI tool was used.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              Core
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">
                React
              </Chip>
              <Chip variant="primary" size="md">
                TypeScript
              </Chip>
              <Chip variant="primary" size="md">
                React Native
              </Chip>
              <Chip variant="primary" size="md">
                Vite
              </Chip>
              <Chip variant="primary" size="md">
                Next.js
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              Testing
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">
                Jest
              </Chip>
              <Chip variant="primary" size="md">
                Vitest
              </Chip>
              <Chip variant="primary" size="md">
                Playwright
              </Chip>
              <Chip variant="primary" size="md">
                React Testing Library
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              Styling & Design
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary" size="md">
                Tailwind CSS
              </Chip>
              <Chip variant="primary" size="md">
                Figma
              </Chip>
              <Chip variant="primary" size="md">
                Storybook
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              State Management
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">
                Redux
              </Chip>
              <Chip variant="secondary" size="md">
                Context API
              </Chip>
              <Chip variant="secondary" size="md">
                Zustand
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              APIs & Integration
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">
                GraphQL
              </Chip>
              <Chip variant="secondary" size="md">
                REST APIs
              </Chip>
              <Chip variant="secondary" size="md">
                Swagger
              </Chip>
              <Chip variant="secondary" size="md">
                Postman
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              DevOps & CI/CD
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="secondary" size="md">
                GitHub Actions
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              Architecture & Build
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="accent" size="md">
                Micro-Frontends
              </Chip>
              <Chip variant="accent" size="md">
                Module Federation
              </Chip>
              <Chip variant="accent" size="md">
                Webpack
              </Chip>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-earth-sage uppercase tracking-wide mb-2">
              AI & Automation
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip variant="accent" size="md">
                AI Development Agents
              </Chip>
              <Chip variant="accent" size="md">
                Multi-Agent Orchestration
              </Chip>
              <Chip variant="accent" size="md">
                Vercel AI SDK
              </Chip>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-earth-stone/30 mt-12">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
            <p className="text-earth-sage">
              Built with Vite, React, Module Federation, and AI development agents
            </p>
            <span className="hidden md:block text-earth-stone">•</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/OmarZambranoDev/portfolio-landing-vite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
                aria-label="Landing page source code on GitHub"
              >
                Landing Source
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </BrowserRouter>
  );
}
