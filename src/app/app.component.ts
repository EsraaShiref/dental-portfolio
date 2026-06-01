import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsappComponent } from './components/shared/floating-whatsapp/floating-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    PortfolioComponent,
    SkillsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    FloatingWhatsappComponent,
  ],
  template: `
    <app-floating-whatsapp />
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-education />
      <app-portfolio />
      <app-skills />
      <app-testimonials />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
