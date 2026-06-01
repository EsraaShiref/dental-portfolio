import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  data = inject(PortfolioDataService);

  activeIndex = signal(0);
  private interval?: ReturnType<typeof setInterval>;

  stars = [1, 2, 3, 4, 5];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.data.testimonials.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  goTo(i: number) {
    this.activeIndex.set(i);
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.activeIndex.update(idx => (idx + 1) % this.data.testimonials.length);
    }, 5000);
  }
}
