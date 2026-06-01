import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  waLink = WA_LINK;

  @ViewChild('heroText') textRef?: ElementRef<HTMLElement>;
  @ViewChild('heroImage') imageRef?: ElementRef<HTMLElement>;
  @ViewChild('heroBadge') badgeRef?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // Stagger text children
    const textEl = this.textRef?.nativeElement;
    if (textEl) {
      const children = textEl.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = `opacity 0.6s ease ${0.1 + i * 0.15}s, transform 0.6s ease ${0.1 + i * 0.15}s`;
        requestAnimationFrame(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        });
      }
    }

    // Scale in image
    const imgEl = this.imageRef?.nativeElement;
    if (imgEl) {
      imgEl.style.opacity = '0';
      imgEl.style.transform = 'scale(0.92)';
      imgEl.style.transition = 'opacity 0.7s ease 0.3s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s';
      setTimeout(() => {
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      }, 100);
    }

    // Badge spring in
    const badgeEl = this.badgeRef?.nativeElement;
    if (badgeEl) {
      badgeEl.style.opacity = '0';
      badgeEl.style.transform = 'scale(0.7) translateY(10px)';
      badgeEl.style.transition = 'opacity 0.5s ease 0.8s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s';
      setTimeout(() => {
        badgeEl.style.opacity = '1';
        badgeEl.style.transform = 'scale(1) translateY(0)';
      }, 100);
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
