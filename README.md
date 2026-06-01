# Dental Portfolio — Dr. Ahmed Wagdy Salama

A high-performance, single-page portfolio website for a general dentist built with **Angular 18** (standalone component architecture). The site presents clinical casework, credentials, skills, and patient testimonials through an interactive, mobile-responsive interface.

## Features

### Sections
| Section | Highlights |
|---------|------------|
| **Hero** | Tagline with staggered text entrance, profile image with animated glow rings, spring-entrance badge, WhatsApp CTA |
| **About** | Professional background, clinical experience across 4 clinics, scroll-reveal animation |
| **Education** | Certificate grid with unique SVG icons per credential (microscope, smile, scissors, sparkles, heart-pulse, shield-check, camera), staggered entrance |
| **Portfolio** | Tabbed before/after gallery (Restorative, Prosthodontics, Endodontics, Surgery, Bleaching), draggable before/after slider, lightbox viewer, "Show More" pagination |
| **Skills** | Three grouped skill cards (Clinical, Professional & Technical, Software & Marketing) with staggered scroll-reveal |
| **Testimonials** | Horizontal auto-scroll carousel with mouse/touch drag support, pause-on-hover, infinite loop, star ratings |
| **Contact** | Appointment form (ReactiveForms with validation), clinic info, clickable map placeholder (Tanta, Egypt) |
| **Footer** | Social links, practice information, back-to-top |

### Interactive Elements
- **Floating WhatsApp button** — Spring-entrance animation (cubic-bezier 0.34, 1.56, 0.64, 1) with 1.5s delay, persistent quick-contact
- **Sticky navbar** — Smooth-scroll navigation with active section tracking
- **Before/after slider** — Drag-to-reveal comparison with lightbox image viewer
- **Scroll-reveal animations** — IntersectionObserver-driven entrance animations across all sections with configurable stagger delays

## Built With

| Technology | Purpose |
|------------|---------|
| Angular 18 | Framework (standalone APIs, signals) |
| TypeScript | Language (strict mode) |
| SCSS | Styling with CSS custom properties & keyframe animations |
| RxJS | Reactive data handling |
| Angular ReactiveForms | Form validation & submission |
| Google Fonts (Inter + Playfair Display) | Typography |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4200
npm start

# Production build — outputs to dist/
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/              # About section
│   │   ├── contact/            # Contact form + map placeholder
│   │   ├── education/          # Certificate grid with SVG icons
│   │   ├── footer/             # Site footer
│   │   ├── hero/               # Hero banner with stagger animations
│   │   ├── navbar/             # Sticky navigation
│   │   ├── portfolio/          # Tabbed before/after gallery
│   │   ├── shared/             # Reusable components
│   │   │   ├── before-after-slider/  # Drag-to-reveal comparison
│   │   │   ├── floating-whatsapp/    # Spring-entrance contact button
│   │   │   └── lightbox/             # Full-screen image viewer
│   │   ├── skills/             # Skill group cards
│   │   └── testimonials/       # Draggable auto-scroll carousel
│   ├── directives/
│   │   └── scroll-reveal.directive.ts  # IntersectionObserver directive
│   ├── models/                 # TypeScript interfaces
│   ├── services/               # Portfolio data + shared constants
│   └── app.component.ts        # Root component
├── assets/                     # Images organized by category
├── index.html                  # Entry point
├── main.ts                     # App bootstrap + global scroll observer
└── styles.scss                 # Global styles, CSS vars, keyframes
```

## Design System

- **Color palette**: Dark navy primary (`#1a2332`), teal secondary (`#0099cc`), gold accent (`#d4a017`)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Responsive**: Mobile-first, fully adaptive layout
- **Animations**: `fadeInUp`, `scaleIn`, `float`, `pulse-glow` keyframes; scroll-triggered `reveal`/`revealed` classes; spring-easing entrance transitions
- **Icons**: Custom inline SVGs in Education section; Font Awesome social icons

## Contact

- **Dr. Ahmed Wagdy Salama** — General Dentist
- **Location**: Tanta, Egypt
- **Email**: [wagdyahmed304@gmail.com](mailto:wagdyahmed304@gmail.com)
- **Phone**: [+201028654881](tel:+201028654881)
- **WhatsApp**: [wa.me/201028654881](https://wa.me/201028654881?text=Hello%20Dr.%20Ahmed,%20I%20would%20like%20to%20book%20an%20appointment)
