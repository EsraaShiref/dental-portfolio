import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  waLink = WA_LINK;

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
