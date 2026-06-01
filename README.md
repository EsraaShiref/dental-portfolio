# Premium Dental Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Angular-18.2-%23DD0031?logo=angular&logoColor=white" alt="Angular 18.2"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4"/>
  <img src="https://img.shields.io/badge/TypeScript-5.5-%233178C6?logo=typescript&logoColor=white" alt="TypeScript 5.5"/>
  <img src="https://img.shields.io/badge/Standalone-Yes-%2300D084?logo=angular&logoColor=white" alt="Standalone"/>
  <img src="https://img.shields.io/badge/build-passing-%2328A745" alt="Build Passing"/>
  <img src="https://img.shields.io/badge/license-MIT-%23A31F34" alt="MIT License"/>
</p>

A high-performance, fully responsive, single-page portfolio website for a general dentist — **Dr. Ahmed Wagdy Salama** — built with **Angular 18 Standalone Components** and **Tailwind CSS v3**. The site presents clinical casework, professional credentials, technical skills, and patient testimonials through an interactive, mobile-first interface. It features smooth, custom site-wide animations designed to match advanced React (Framer Motion) animation behaviors.

---

## 🚀 Key Features

### Modern Architecture
Built entirely using **Angular Standalone Components**, ensuring lightweight bundles, optimal performance, and zero `NgModule` overhead. State management leverages **Angular Signals** for reactive, efficient change detection.

### Fluid Animations
Custom **`@angular/animations`** and **cubic-bezier transitions** mirroring advanced Framer Motion curves — staggered element reveals with 6 duration variants (0.35s–0.8s), 4 direction variants (fade-up, slide-left, slide-right, scale), elastic spring `backOut` mount animations, infinite float loops, and spring icon hovers.

### Interactive Lightbox & Case Galleries
Full-screen image lightbox with smooth enter/leave transitions. Tabbed before/after gallery across Restorative, Prosthodontics, Endodontics, Surgery, and Bleaching categories, each with draggable comparison sliders and "Show More" pagination.

### Sticky Dynamic Navbar
Blurred glass-morphism backdrop (`backdrop-blur-md bg-background/80`) with host-level `sticky top-0 z-50` positioning for reliable pinning. Active section indicator with smooth underline transition. Mobile-responsive hamburger menu.

### Floating CTA
WhatsApp quick-booking button with spring entrance animation (1.5s elastic delay), official WhatsApp SVG icon on brand green (`#25D366`), and hover/tap feedback scales.

### Seamless Personal Branding
Profile photo fully integrated across **Favicon**, **Navbar**, **Footer**, and **Hero** section with pixel-perfect `object-cover` circular aspect ratio.

### Fully Responsive & Themed
Mobile-first responsive design via Tailwind breakpoints. Polished typography scale — **Playfair Display** (serif headings) + **Inter** (sans body) — with HSL-driven CSS custom property theming.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | Angular 18 (Standalone Components, Signals) |
| **Styling** | Tailwind CSS v3 (Utility-first, HSL custom properties) |
| **Animations** | `@angular/animations` Browser Module |
| **Language** | TypeScript 5.5 (strict mode) |
| **Build Tooling** | PostCSS 8 + Autoprefixer |
| **Forms** | Angular ReactiveForms |
| **Typography** | Google Fonts — Inter / Playfair Display |
| **Icons** | Custom inline SVGs (Lucide-style) |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/           # About section (2-col grid, slide-in animation)
│   │   ├── contact/         # Appointment form + map + WhatsApp CTA
│   │   ├── education/       # 11-card certificate grid (staggered reveal)
│   │   ├── footer/          # 3-col footer with branding + quick links
│   │   ├── hero/            # Hero banner (glow rings, badge card, float)
│   │   ├── navbar/          # Sticky nav (backdrop-blur, active underline)
│   │   ├── portfolio/       # Tabbed gallery + lightbox + before/after
│   │   ├── shared/
│   │   │   ├── before-after-slider/
│   │   │   ├── floating-whatsapp/
│   │   │   └── lightbox/
│   │   ├── skills/          # 3 grouped competency cards
│   │   └── testimonials/    # Auto-scroll carousel with drag
│   ├── directives/
│   │   └── scroll-reveal.directive.ts
│   ├── models/              # TypeScript interfaces
│   └── services/            # Data + constants
├── assets/                  # Profile photo, case images, videos
├── index.html               # Entry point
├── main.ts                  # Bootstrap + global scroll observer
├── postcss.config.js
├── tailwind.config.js
└── styles.scss              # Tailwind directives + CSS vars + keyframes
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
ng serve
```

Open **`http://localhost:4200`** in your browser. The dev server supports hot-reload.

### Production Build

```bash
ng build
```

Output is written to `dist/dental-portfolio-angular/browser/`.

---

## ⚙️ Configuration & Customization

### Theme Colors
All primary, secondary, accent, and surface colors are defined as **HSL CSS custom properties** in `src/styles.scss`. Tailwind references them via `hsl(var(--color))` in `tailwind.config.js`. Adjust the HSL values to rebrand the entire site:

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --primary:    222 47% 11%;
  --secondary:  200 98% 39%;
  --accent:     43 74% 49%;
}
```

### Profile & Case Assets
Replace images in `src/assets/`:
- `assets/ahmed-profile.png` — Profile photo (Favicon, Navbar, Footer, Hero)
- `assets/cases/` — Clinical before/after images
- `assets/videos/` — Prosthodontics demonstration

### Content
Edit `src/app/services/portfolio-data.service.ts` to update contact details, testimonials, skills, education certificates, and gallery image arrays.

---

<p align="center">
  Built with ❤️ using Angular 18 · Tailwind CSS · TypeScript
</p>
