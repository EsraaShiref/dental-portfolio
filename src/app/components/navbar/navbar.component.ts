import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  waLink = WA_LINK;

  mobileOpen = signal(false);
  activeSection = signal('hero');

  navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    const ids = this.navLinks.map((l) => l.href);
    for (const id of [...ids].reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          this.activeSection.set(id);
          return;
        }
      }
    }
    this.activeSection.set('hero');
  }

  scrollTo(id: string) {
    this.mobileOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }
}
