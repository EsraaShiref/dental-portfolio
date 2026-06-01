import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer class="footer">
  <div class="container footer-inner">

    <!-- Brand -->
    <div class="footer-brand">
      <div class="footer-logo-row">
        <div class="footer-badge">AS</div>
        <span class="footer-name">Dr. Ahmed Wagdy Salama</span>
      </div>
      <p>Dedicated to providing complete comprehensive care and restoring confident smiles through precision dentistry.</p>
    </div>

    <!-- Quick Links -->
    <div class="footer-links">
      <h4>Quick Links</h4>
      <ul>
        @for (link of links; track link.label) {
          <li><button (click)="scrollTo(link.id)">{{ link.label }}</button></li>
        }
      </ul>
    </div>

    <!-- Connect -->
    <div class="footer-connect">
      <h4>Connect</h4>
      <div class="social-icons">
        <a href="mailto:wagdyahmed304@gmail.com" class="social-btn" title="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
        <a href="tel:+201028654881" class="social-btn" title="Phone">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.56 3.35 2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
        <a [href]="waLink" target="_blank" rel="noopener noreferrer" class="social-btn wa" title="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
        </a>
      </div>
      <p class="copyright">&copy; {{ year }} Dr. Ahmed Wagdy Salama.<br>All rights reserved.</p>
    </div>

  </div>
</footer>
  `,
  styles: [`
.footer {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 3rem 0;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-inner {
  display: grid;
  gap: 2rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
}

.footer-brand {
  p {
    font-size: 0.875rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
    max-width: 22rem;
    margin-top: 0.75rem;
  }
}

.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.footer-badge {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: var(--secondary);
  color: white;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-name {
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: 1rem;
}

.footer-links {
  text-align: center;

  h4 {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
  }

  ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }

  button {
    font-size: 0.875rem;
    color: rgba(255,255,255,0.6);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
    transition: color 0.2s;

    &:hover { color: white; }
  }
}

.footer-connect {
  text-align: right;

  h4 {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
  }
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.social-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  transition: all 0.2s;

  &:hover {
    background: var(--secondary);
    color: white;
  }

  &.wa { color: #25D366; background: rgba(37, 211, 102, 0.15); }
  &.wa:hover { background: #25D366; color: white; }
}

.copyright {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .footer-links, .footer-connect { text-align: left; }
  .social-icons { justify-content: flex-start; }
}
  `]
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
