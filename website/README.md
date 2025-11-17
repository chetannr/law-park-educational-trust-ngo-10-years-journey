# Law Park Educational Trust - 10 Years Journey Website

A modern, responsive website showcasing the 10-year journey of Law Park Educational Trust, an NGO dedicated to transforming lives through education in Karnataka, India.

## Features

- **Hero Section**: Full-screen introduction with mission statement
- **Impact Overview**: Animated statistics dashboard showing 10 years of impact
- **Interactive Timeline**: Chronological journey with expandable milestones
- **Image Gallery**: Lightbox gallery with all program photos
- **Testimonials**: Words of gratitude from the community
- **Call-to-Action Sections**: Multiple engagement points for donations, volunteering, and partnerships

## Technology Stack

- **React 18+** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Modern Web Standards**: Accessibility (WCAG 2.1 AA), Responsive Design, Performance Optimized

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
website/
├── public/
│   └── extracted_content/    # Images and JSON data from PowerPoint
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── sections/         # Hero, Timeline, Gallery, etc.
│   │   ├── ui/               # Reusable UI components
│   │   └── shared/           # Shared utilities
│   ├── data/                 # Data processing utilities
│   ├── types/                # TypeScript type definitions
│   └── App.tsx               # Main application component
└── ...
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Skip to content link
- Color contrast compliance (WCAG 2.1 AA)

## Responsive Design

- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Touch-friendly interactions
- Optimized images for different screen sizes

## Performance

- Lazy loading images
- Optimized assets (images compressed to 15.81 MB from 190 MB)
- Code splitting
- Fast initial load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Law Park Educational Trust.
