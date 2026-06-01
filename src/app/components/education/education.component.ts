import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="education" class="education">
  <div class="container">
    <div class="section-header">
      <h2>Continuous Education</h2>
      <div class="divider"></div>
      <p>Dedicated to staying at the forefront of dental advancements through rigorous postgraduate training and certification.</p>
    </div>

    <div class="cert-grid">
      @for (cert of data.certificates; track cert.title; let i = $index) {
        <div class="cert-card card" [style.animation-delay]="(i * 0.055) + 's'">
          <div class="cert-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
          </div>
          <div>
            <h4>{{ cert.title }}</h4>
            <p>Certified Completion</p>
          </div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  styles: [`
.education {
  padding: 6rem 0;
}

.cert-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1280px) { grid-template-columns: repeat(4, 1fr); }
}

.cert-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  animation: fadeInUp 0.35s ease both;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: default;

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);

    .cert-icon {
      background: rgba(0, 153, 204, 0.1);
      color: var(--secondary);
    }
  }
}

.cert-icon {
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: var(--muted);
  color: var(--foreground);
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

h4 {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

p {
  font-size: 0.75rem;
  color: var(--muted-foreground);
}
  `]
})
export class EducationComponent {
  data = inject(PortfolioDataService);
}
