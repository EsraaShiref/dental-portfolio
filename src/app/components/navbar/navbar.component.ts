import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  data = inject(PortfolioDataService);
  waLink = WA_LINK;

  mobileOpen = signal(false);
  activeSection = signal('hero');

  @HostListener('window:scroll')
  onScroll() {
    const ids = ['hero', 'about', 'education', 'portfolio', 'skills', 'contact'];
    for (const id of [...ids].reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
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
    this.mobileOpen.update(v => !v);
  }
}
