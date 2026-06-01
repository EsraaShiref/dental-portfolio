# Dental Portfolio — Dr. Ahmed Wagdy Salama

A high-performance, single-page portfolio website for a general dentist built with **Angular 18** (standalone component architecture) and **Tailwind CSS v3**. The site presents clinical casework, credentials, skills, and patient testimonials through an interactive, mobile-responsive interface.

## Features

### Sections
| Section | Highlights |
|---------|------------|
| **Hero** | Tagline with staggered text entrance (0.1s delays), profile image with animated glow rings + 5s float loop, spring-entrance badge card (backOut 0.5s), WhatsApp CTA |
| **About** | Professional background, clinical experience across 4 clinics, slide-in from left/right with 0.15s stagger |
| **Education** | Certificate grid with unique SVG icons per credential, staggered scroll-reveal (i × 0.055s), spring icon hover (scale 1.18, rotate -6°) |
| **Portfolio** | Tabbed before/after gallery (Restorative, Prosthodontics, Endodontics, Surgery, Bleaching), draggable before/after slider, lightbox viewer (AnimatePresence-style), staggered pair entrance (0.35s) |
| **Skills** | Three grouped skill cards (Clinical, Professional & Technical, Software & Marketing) with staggered scroll-reveal (0.1s/0.2s/0.3s delays), spring icon hover |
| **Testimonials** | Horizontal auto-scroll carousel with mouse/touch drag support, pause-on-hover, infinite loop, star ratings, 0.8s fade-in wrapper |
| **Contact** | Appointment form (ReactiveForms with validation), clinic info, slide-in from opposite sides (0.6s easeOut), form success mount animation (scale 0.9 → 1) |
| **Footer** | Social links, practice information, back-to-top |

### Interactive Elements
- **Floating WhatsApp button** — Spring-entrance animation (cubic-bezier 0.34, 1.56, 0.64, 1) with 1.5s delay, persistent quick-contact, official WhatsApp SVG icon
- **Sticky navbar** — Smooth-scroll navigation with active section tracking, host-level sticky positioning
- **Before/after slider** — Drag-to-reveal comparison with lightbox image viewer (viewport-constrained via max-h-[80vh])
- **Scroll-reveal animations** — IntersectionObserver-driven entrance animations across all sections with 6 duration variants (0.35s–0.8s), 4 direction variants (up, left, right, scale), spring backOut easing

## Built With

| Technology | Purpose |
|------------|---------|
| Angular 18 | Framework (standalone APIs, signals) |
| TypeScript | Language (strict mode) |
| Tailwind CSS v3 | Utility-first styling via PostCSS |
| SCSS | Global styles, CSS custom properties, keyframes |
| PostCSS + autoprefixer | Tailwind compilation & vendor prefixes |
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
│   │   ├── about/              # About section (2-col grid, quote, Stethoscope card)
│   │   ├── contact/            # Contact form + map placeholder + WhatsApp CTA
│   │   ├── education/          # 11-card grid with unique SVG icons
│   │   ├── footer/             # 3-col grid with Quick Links & Connect
│   │   ├── hero/               # Radial-gradient bg, staggered text, badge card
│   │   ├── navbar/             # Sticky nav, backdrop-blur, active underline
│   │   ├── portfolio/          # Tabbed before/after gallery, PairedGallery, grids
│   │   ├── shared/             # Reusable components
│   │   │   ├── before-after-slider/  # Drag-to-reveal comparison
│   │   │   ├── floating-whatsapp/    # Spring-entrance WhatsApp button
│   │   │   └── lightbox/             # Scrollable full-screen image viewer
│   │   ├── skills/             # border-t-4 colored skill group cards
│   │   └── testimonials/       # Drag + auto-scroll carousel with star ratings
│   ├── directives/
│   │   └── scroll-reveal.directive.ts  # IntersectionObserver directive
│   ├── models/                 # TypeScript interfaces
│   ├── services/               # Portfolio data + shared constants
│   └── app.component.ts        # Root component (inline template)
├── assets/                     # Images organized by category
├── index.html                  # Entry point with Google Fonts
├── main.ts                     # App bootstrap + global scroll observer
├── postcss.config.js           # PostCSS (tailwindcss + autoprefixer)
├── tailwind.config.js          # Tailwind v3 config with HSL variables
└── styles.scss                 # Tailwind directives, CSS vars, keyframes
```

## Design System

- **Color palette**: HSL-driven via CSS custom properties — dark navy primary (`hsl(222 47% 11%)`), teal secondary (`hsl(200 98% 39%)`), gold accent (`hsl(43 74% 49%)`)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Responsive**: Mobile-first with Tailwind responsive prefixes, fully adaptive layout
- **Animations**: `fadeInUp`, `scaleIn`, `float` (5s loop), `pulse-glow` keyframes; scroll-triggered `reveal`/`revealed` classes with 6 duration variants (`fast`: 0.35s, `medium`: 0.45s, default: 0.6s, `slow`: 0.7s, `xslow`: 0.8s) and 4 direction variants (up, left slide -30px, right slide +30px, scale 0.92); spring backOut badge entrance (`cubic-bezier(0.34, 1.56, 0.64, 1)`); spring icon hovers (scale+rotate); form success mount animation
- **Icons**: Custom inline SVGs throughout (lucide-style); official WhatsApp brand icon

## Contact

- **Dr. Ahmed Wagdy Salama** — General Dentist
- **Location**: Tanta, Egypt
- **Email**: [wagdyahmed304@gmail.com](mailto:wagdyahmed304@gmail.com)
- **Phone**: [+201028654881](tel:+201028654881)
- **WhatsApp**: [wa.me/201028654881](https://wa.me/201028654881?text=Hello%20Dr.%20Ahmed,%20I%20would%20like%20to%20book%20an%20appointment)
