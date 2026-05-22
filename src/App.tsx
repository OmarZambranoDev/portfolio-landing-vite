import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chip } from '@OmarZambranoDev/portfolio-ui';
import { Music, TrendingUp } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import MusicPage from './pages/MusicPage';
import TradePage from './pages/TradePage';

function HomePage() {
  const projects = [
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
        'Mock WebSocket',
        'Playwright',
        'Vitest',
        'GitHub Actions',
      ],
      icon: TrendingUp,
      repoUrl: 'https://github.com/OmarZambranoDev/portfolio-trade-app',
      path: '/trade',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-stone/20 via-white to-earth-sand/20">
      {/* Hero Section */}
      <section className="border-b border-earth-stone/30">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-forest mb-4">Omar Zambrano</h1>
          <p className="text-xl text-earth-sage font-medium mb-4">Senior React Engineer</p>
          <p className="text-lg text-earth-moss">
            Frontend engineer with 7 years of experience building large scale applications. This
            portfolio demonstrates my work with micro frontend architecture using React, TypeScript,
            and Module Federation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-6 max-w-7xl">
        <h2 className="text-2xl font-bold text-earth-forest mb-4">About Me</h2>
        <p className="text-earth-moss leading-relaxed">
          I&apos;m a frontend engineer with 7 years of experience at Walmart, where I built large
          scale web and mobile applications using React and TypeScript. I created this portfolio to
          explore micro frontend architecture and demonstrate how independent applications can work
          together seamlessly through Module Federation. Each project below is a standalone
          application that integrates with this host page, reflecting the modular thinking I apply
          to real engineering challenges.
        </p>
        <br />
        <p className="text-earth-moss leading-relaxed">
          I&apos;m also exploring multi-agent AI development workflows. Each project in this
          portfolio has its own AI agent, with a separate orchestrator agent coordinating across
          them. This approach lets me experiment with how AI can accelerate development while
          maintaining code quality.
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
            <p className="text-earth-sage">Built with Vite, React, and Module Federation</p>
            <span className="hidden md:block text-earth-stone">•</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/OmarZambranoDev/portfolio-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
                aria-label="UI Library source code on GitHub"
              >
                UI Library
              </a>
              <a
                href="https://github.com/OmarZambranoDev/portfolio-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-forest hover:text-earth-sage transition-colors underline underline-offset-4"
                aria-label="Landing page source code on GitHub"
              >
                Landing Source
              </a>
            </div>
          </div>
          <p className="text-earth-sage/60 text-xs text-center mt-4">
            All components are custom-built using TypeScript, Tailwind, and
            class-variance-authority. Designed and developed in collaboration with DeepSeek AI.
          </p>
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
      </Routes>
    </BrowserRouter>
  );
}
