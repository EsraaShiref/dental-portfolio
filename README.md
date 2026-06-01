# Premium Dental Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Angular-18.2-%23DD0031?logo=angular&logoColor=white" alt="Angular 18.2"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4"/>
  <img src="https://img.shields.io/badge/TypeScript-5.5-%233178C6?logo=typescript&logoColor=white" alt="TypeScript 5.5"/>
  <img src="https://img.shields.io/badge/Standalone-Architecture-%2300D084?logo=angular&logoColor=white" alt="Standalone Architecture"/>
  <img src="https://img.shields.io/badge/PostCSS-8-%23DD3A0A?logo=postcss&logoColor=white" alt="PostCSS 8"/>
  <img src="https://img.shields.io/badge/license-MIT-%23A31F34" alt="MIT License"/>
  <br/>
  <img src="https://img.shields.io/badge/build-passing-%2328A745" alt="Build Passing"/>
  <img src="https://img.shields.io/badge/responsive-mobile--first-%23009688" alt="Responsive"/>
  <img src="https://img.shields.io/badge/animated-scroll--reveal-%23FF6B6B" alt="Scroll Reveal Animations"/>
</p>

A high-performance, fully responsive, single-page portfolio website for a general dentist — **Dr. Ahmed Wagdy Salama** — built with **Angular 18 Standalone Components** and **Tailwind CSS v3**. The site presents clinical casework, professional credentials, technical skills, and patient testimonials through an interactive, mobile-first interface featuring fluid site-wide animations matching advanced Framer Motion curve behaviors.

---

## 🚀 Key Features

### Modern Architecture
- Built entirely with **Angular Standalone Components** — lightweight bundles, optimal performance, no `NgModule` overhead.
- Fully **typed** with strict-mode TypeScript across models, services, and components.
- **Signal-based** state management (`@angular/core` signals) for reactive, efficient change detection.

### Fluid Animations
- Custom **`@angular/animations`** triggers and **cubic-bezier transitions** mirroring advanced Framer Motion behaviors.
- **Staggered scroll-reveal** system with 6 duration variants (0.35s–0.8s), 4 direction variants (fade-up, slide-left, slide-right, scale), and spring `backOut` easing.
- **Mount animations** for floating elements — elastic spring-entrance after configurable delay.
- **Infinite float loops** on hero imagery, **spring icon hovers** (scale + rotate with `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Hover lift** on skill and education cards with precise `translateY` offsets.

### Interactive Lightbox & Case Galleries
- Full-screen image lightbox with crossfade transitions (`AnimatePresence`-style via Angular animations).
- Tabbed before/after gallery for Restorative, Prosthodontics, Endodontics, Surgery, and Bleaching categories.
- **Draggable before/after slider** — drag to reveal treatment outcomes.
- "Show More" pagination for expanding galleries dynamically.

### Sticky Dynamic Navbar
- Blurred glass-morphism backdrop (`backdrop-blur-md bg-background/80`).
- Host-level `sticky top-0 z-50` positioning for reliable pinning across all viewports.
- Active section indicator with smooth CSS transition underline.
- Mobile-responsive hamburger menu with animated toggle.

### Floating CTA
- WhatsApp quick-booking button with **spring entrance animation** (1.5s delay, elastic `cubic-bezier` curve).
- **Official WhatsApp SVG icon** on `#25D366` brand green background.
- Hover scale (1.1) and tap scale (0.93) feedback.

### Seamless Personal Branding
- Profile photo integrated across **Favicon**, **Navbar**, **Footer**, and **Hero** section.
- Pixel-perfect aspect ratio via `object-cover` with circular masks.
- Hero badge card spring-entrance with scale-up and translation.

### Fully Responsive & Themed
- **Mobile-first** responsive design using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- **HSL-driven design tokens** for easy theme customization.
- Polished typography scale: **Playfair Display** (serif headings) + **Inter** (sans body).

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Angular 18.2** | Frontend framework (standalone APIs, signals) |
| **TypeScript 5.5** | Language (strict mode) |
| **Tailwind CSS v3** | Utility-first styling via PostCSS |
| **PostCSS 8 + Autoprefixer** | Tailwind compilation & vendor prefixing |
| **Angular Animations** | `@angular/animations` browser module for mount/leave triggers |
| **RxJS** | Reactive data patterns |
| **Angular ReactiveForms** | Form validation & submission |
| **Google Fonts** | Inter (body) + Playfair Display (headings) |
| **Lucide Icons** | Custom inline SVG icon system |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/                    # About section — 2-col grid, slide-in
│   │   ├── contact/                  # Contact form + map + WhatsApp CTA
│   │   ├── education/                # 11-card certificate grid (staggered)
│   │   ├── footer/                   # 3-col footer with branding + links
│   │   ├── hero/                     # Hero banner — radial gradient, badge card
│   │   ├── navbar/                   # Sticky nav — backdrop-blur, active link
│   │   ├── portfolio/                # Tabbed gallery + lightbox + slider
│   │   ├── shared/
│   │   │   ├── before-after-slider/  # Drag-to-reveal image comparison
│   │   │   ├── floating-whatsapp/    # Spring-entrance WhatsApp FAB
│   │   │   └── lightbox/             # AnimatePresence-style image modal
│   │   ├── skills/                   # 3 grouped skill cards
│   │   └── testimonials/             # Auto-scroll carousel + drag support
│   ├── directives/
│   │   └── scroll-reveal.directive.ts  # IntersectionObserver + CSS class toggling
│   ├── models/                       # TypeScript interfaces
│   ├── services/                     # Portfolio data + shared constants
│   └── app.component.ts              # Root component (inline template)
├── assets/                           # Profile photos, case images, videos
├── index.html                        # Entry point + Google Fonts
├── main.ts                           # App bootstrap + global scroll observer
├── postcss.config.js                 # PostCSS plugins (tailwindcss, autoprefixer)
├── tailwind.config.js                # Tailwind v3 config with HSL tokens
└── styles.scss                       # Tailwind directives + CSS variables + keyframes
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/EsraaShiref/dental-portfolio.git

# 2. Navigate into the project
cd dental-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The development server will launch at **`http://localhost:4200`** with hot-reload.

### Production Build

```bash
npm run build
```

Output is written to `dist/dental-portfolio-angular/browser/`. The production build includes optimized bundles, hashed assets, and inlined Google Fonts.

---

## ⚙️ Configuration & Customization

### Theme Colors
All primary, secondary, accent, and surface colors are defined as **HSL CSS custom properties** in `src/styles.scss`:

```css
:root {
  --background: 210 40% 98%;   /* Light surface */
  --foreground: 222 47% 11%;   /* Dark navy text */
  --primary: 222 47% 11%;      /* Dark navy */
  --secondary: 200 98% 39%;    /* Teal */
  --accent: 43 74% 49%;        /* Gold */
  --border: 214 32% 91%;
  --radius: 0.5rem;
}
```

Tailwind references these via `hsl(var(--color))` in `tailwind.config.js`. Adjust the HSL values to rebrand the entire site.

### Profile & Case Assets
Replace images in `src/assets/` to personalize:
- `assets/ahmed-profile.png` — Hero / Navbar / Footer / Favicon profile photo
- `assets/cases/` — Clinical before/after casework images
- `assets/videos/` — Prosthodontics demonstration video

### Content
Edit `src/app/services/portfolio-data.service.ts` to update:
- Doctor contact details (phone, email, WhatsApp link)
- Testimonials, skills, education certificates
- Gallery image arrays per category

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `210 40% 98%` | Page background |
| `--foreground` | `222 47% 11%` | Primary text |
| `--primary` | `222 47% 11%` | Dark nav / footer |
| `--secondary` | `200 98% 39%` | CTAs, accents |
| `--accent` | `43 74% 49%` | Gold highlights |
| `--font-sans` | `Inter` | Body text |
| `--font-serif` | `Playfair Display` | Headings |

**Animation Timing Map:**

| Variant | Duration | Easing | Used In |
|---------|----------|--------|---------|
| `reveal` (default) | 0.6s | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Hero, About, Contact |
| `reveal-fast` | 0.35s | `cubic-bezier(0.4, 0, 0.2, 1)` | Education, Portfolio |
| `reveal-medium` | 0.45s | `cubic-bezier(0.4, 0, 0.2, 1)` | Skills |
| `reveal-slow` | 0.7s | `cubic-bezier(0, 0, 0.2, 1)` | Hero image |
| `reveal-xslow` | 0.8s | default | Testimonials wrapper |
| `reveal-badge` | 0.5s | backOut spring | Hero badge card |

---

## 📬 Contact

**Dr. Ahmed Wagdy Salama** — General Dentist

- **Location**: Tanta, Egypt
- **Email**: [wagdyahmed304@gmail.com](mailto:wagdyahmed304@gmail.com)
- **Phone**: [+201028654881](tel:+201028654881)
- **WhatsApp**: [wa.me/201028654881](https://wa.me/201028654881?text=Hello%20Dr.%20Ahmed,%20I%20would%20like%20to%20book%20an%20appointment)

---

<p align="center">
  Built with ❤️ using Angular 18 · Tailwind CSS · TypeScript
</p>
