# Dr. Ahmed Wagdy Salama — Dental Portfolio

A premium, responsive portfolio website designed for a Dental Surgeon to showcase clinical cases, academic background, and enable direct patient bookings. Deployed on Vercel.

**Live Site:** [https://ahmed-wagdy-portfolio.vercel.app/](https://ahmed-wagdy-portfolio.vercel.app/)

---

## Features

- **Dynamic Clinical Case Filtering** — Seamlessly switch between dental categories (Restorative, Prosthodontics, Endodontics, Oral Surgery, Bleaching).
- **Interactive Before/After Sliders** — Custom comparison views for surgical and cosmetic results.
- **Dynamic WhatsApp Booking** — The contact form automatically captures patient details and formats them into a direct WhatsApp message link.
- **Optimized Brand Identity** — Custom circular high-resolution browser tab icon (Favicon).

---

## Tech Stack

| Layer        | Technology        |
| ------------ | ----------------- |
| Frontend     | Angular 19+       |
| Styling      | Tailwind CSS      |
| Deployment   | Vercel            |

---

## Configuration

To update the doctor's contact info globally, modify **`src/app/services/portfolio-data.service.ts`**:

- `WA_LINK` — WhatsApp URL used by every call-to-action across the site (Navbar, Hero, Contact, Footer, Floating button).
- Phone, email, and location displayed on the Contact section.

---

## Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/EsraaShiref/dental-portfolio.git

# 2. Install dependencies
npm install

# 3. Start the dev server
ng serve
```

Open **http://localhost:4200/** in your browser.

### Production Build

```bash
ng build
```

Output is written to `dist/dental-portfolio-angular/browser/`.
