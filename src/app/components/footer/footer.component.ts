import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer class="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10 reveal">
  <div class="max-w-7xl mx-auto px-4 md:px-6">
    <div class="grid md:grid-cols-3 gap-8 items-center md:items-start">
      <!-- Brand -->
      <div class="text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
          <img src="assets/ahmed-profile.png" alt="Dr. Ahmed Wagdy Salama" class="w-8 h-8 rounded-full object-cover border border-white/20 shadow-sm" />
          <span class="font-serif font-semibold text-lg">Dr. Ahmed Wagdy Salama</span>
        </div>
        <p class="text-primary-foreground/70 text-sm max-w-xs mx-auto md:mx-0">
          Dedicated to providing complete comprehensive care and restoring confident smiles through precision dentistry.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="text-center">
        <h4 class="font-semibold mb-4 text-white">Quick Links</h4>
        <ul class="space-y-2 text-sm text-primary-foreground/70">
          @for (link of links; track link.label) {
            <li>
              <button (click)="scrollTo(link.id)" class="hover:text-white transition-colors">{{ link.label }}</button>
            </li>
          }
        </ul>
      </div>

      <!-- Connect -->
      <div class="text-center md:text-right">
        <h4 class="font-semibold mb-4 text-white">Connect</h4>
        <div class="flex items-center justify-center md:justify-end gap-3">
          <a href="mailto:wagdyahmed304@gmail.com" class="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-primary-foreground/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[18px] h-[18px]">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="tel:+201028654881" class="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all text-primary-foreground/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[18px] h-[18px]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.35 2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <a [href]="waLink" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all text-green-400">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
          </a>
        </div>
        <p class="text-sm text-primary-foreground/60 mt-6">&copy; {{ year }} Dr. Ahmed Wagdy Salama.<br> All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  waLink = WA_LINK;
  year = new Date().getFullYear();

  links = [
    { label: 'Home', id: 'hero' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Expertise', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
