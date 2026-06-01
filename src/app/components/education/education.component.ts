import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="education" class="py-24 reveal">
  <div class="max-w-7xl mx-auto px-4 md:px-6">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Continuous Education</h2>
      <div class="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
      <p class="text-muted-foreground max-w-2xl mx-auto">
        Dedicated to staying at the forefront of dental advancements through rigorous postgraduate training and certification.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      @for (cert of data.certificates; track cert.title; let i = $index) {
        <div
          class="h-full transition-all group border border-border/50 hover:border-secondary/30 cursor-default rounded-xl bg-card hover:-translate-y-[3px] hover:scale-[1.02] reveal reveal-fast reveal-y-16"
          [style.transition-delay]="(i * 0.055) + 's'"
        >
          <div class="p-6 flex items-start gap-4">
            <!-- Icon -->
            <div
              class="p-3 rounded-lg bg-muted group-hover:bg-secondary/10 transition-all shrink-0 spring-hover"
            >
              @switch (cert.icon) {
                @case ('microscope') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                    <circle cx="20" cy="10" r="2"/>
                  </svg>
                }
                @case ('smile') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>
                  </svg>
                }
                @case ('scissors') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/>
                  </svg>
                }
                @case ('sparkles') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                  </svg>
                }
                @case ('heart-pulse') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
                  </svg>
                }
                @case ('shield-check') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                }
                @case ('camera') {
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-foreground group-hover:text-secondary transition-colors">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>
                  </svg>
                }
              }
            </div>
            <!-- Text -->
            <div>
              <h4 class="font-semibold text-sm leading-tight mt-1">{{ cert.title }}</h4>
              <p class="text-xs text-muted-foreground mt-1">Certified Completion</p>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  styles: [`
    :host { display: block; }
    .hover\\:scale-118:hover { transform: scale(1.18) rotate(-6deg); }
  `]
})
export class EducationComponent {
  data = inject(PortfolioDataService);
}
