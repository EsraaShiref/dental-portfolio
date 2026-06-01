# Dental Portfolio — Dr. Ahmed Wagdy Salama

A modern, single-page portfolio website for a general dentist built with **Angular 18** (standalone components). The site showcases the doctor's clinical work, education, skills, and patient testimonials with an elegant, responsive UI.

## Features

- **Hero Section** — Tagline, profile image with animated glow rings, WhatsApp CTA
- **About** — Background, operating experience across 4 clinics
- **Education** — Certificates and courses completed
- **Portfolio** — Tabbed before/after gallery with image pairs:
  - Restorative, Prosthodontics, Endodontics, Surgery, Bleaching
  - Before/after slider component, lightbox viewer, "Show More" pagination
- **Skills** — Three groups: Clinical, Professional & Technical, Software & Marketing
- **Testimonials** — Patient reviews with star ratings
- **Contact** — Appointment booking form (ReactiveForms), phone/email/location info, WhatsApp link
- **Floating WhatsApp** — Persistent quick-contact button
- **Footer** — Social links and practice info

## Built With

| Technology | Purpose |
|-----------|---------|
| Angular 18 | Framework (standalone APIs, signals) |
| TypeScript | Language |
| SCSS | Styling with CSS custom properties |
| RxJS | Reactive data handling |
| ReactiveFormsModule | Form validation |
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
│   │   ├── about/          # About section
│   │   ├── contact/        # Contact form + info
│   │   ├── education/      # Certificates display
│   │   ├── footer/         # Site footer
│   │   ├── hero/           # Hero banner
│   │   ├── navbar/         # Sticky navigation
│   │   ├── portfolio/      # Tabbed before/after gallery
│   │   ├── shared/         # Reusable: before-after-slider,
│   │   │                   #   floating-whatsapp, lightbox
│   │   ├── skills/         # Skill groups
│   │   └── testimonials/   # Patient reviews
│   ├── models/             # TypeScript interfaces
│   ├── services/           # Portfolio data & WhatsApp link
│   └── app.component.ts    # Root component
├── assets/                 # Images grouped by category
├── index.html
├── main.ts                 # App bootstrap
└── styles.scss             # Global styles & variables
```

## Design

- **Color palette**: Dark navy primary (#1a2332), teal secondary (#0099cc), gold accent (#d4a017)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Responsive**: Fully mobile-adaptive layout
- **Animations**: fadeInUp, float, pulse-glow

## Contact

- Dr. Ahmed Wagdy Salama
- 📍 Tanta, Egypt
- 📧 wagdyahmed304@gmail.com
- 📱 [+201028654881](tel:+201028654881)
- 💬 [WhatsApp](https://wa.me/201028654881)
