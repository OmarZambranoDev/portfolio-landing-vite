# Portfolio Landing Page
Vite host application for my micro-frontend portfolio. This app serves as the container that will eventually integrate multiple remote micro-frontends via Module Federation.

## Tech Stack
- Vite 5.0.0
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.4.17
- @OmarZambranoDev/portfolio-ui (shared component library via GitHub Packages)
- React Router DOM
- @module-federation/vite

# Getting Started

## Prerequisites
- Node.js 20.19.5
- npm 10.8.2
- Verdaccio running locally (for @portfolio/ui)
- GitHub Packages access (for @OmarZambranoDev/portfolio-ui)

## Installation
npm install  
npm run copy:ui  
npm run dev  

Open http://localhost:3000

## Scripts
npm run dev - Start development server  
npm run build - Build for production  
npm run start - Start production server  
npm run lint - Run ESLint  
npm run lint:fix - Fix linting issues  
npm run format - Format code with Prettier  
npm run copy:ui - Copy CSS from @portfolio/ui to public/  

## Project Structure
```
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
├── public/
│ └── index.css (copied from @portfolio/ui)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Future Integration
This host app will use @module-federation/vite to load remote components from each standalone application:

- Music Player
- Shop
- Trade
- Social
- Travel
- News

## License
MIT
