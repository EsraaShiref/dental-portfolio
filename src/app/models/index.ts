export interface GalleryImage {
  src: string;
  label: string;
}

export interface PortfolioTab {
  value: string;
  label: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Certificate {
  title: string;
  icon: string; // SVG path or lucide icon name
}

export interface Testimonial {
  name: string;
  title: string;
  review: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}

export interface AppointmentForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}
