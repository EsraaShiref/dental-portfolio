import { Component, inject, ElementRef, ViewChild, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  data = inject(PortfolioDataService);

  @ViewChild('track') trackRef?: ElementRef<HTMLElement>;

  isPaused = signal(false);
  stars = [1, 2, 3, 4, 5];
  triple = [...this.data.testimonials, ...this.data.testimonials, ...this.data.testimonials];

  private offset = 0;
  private trackWidth = 0;
  private rafId = 0;
  private lastTime = 0;
  private speed = 0.5;

  // Drag state
  private dragging = false;
  private dragStartX = 0;
  private dragStartOffset = 0;

  ngAfterViewInit() {
    if (!this.trackRef) return;
    this.trackWidth = this.trackRef.nativeElement.scrollWidth / 3;
    this.lastTime = performance.now();
    this.tick(this.lastTime);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  private tick = (now: number) => {
    if (!this.isPaused() && !this.dragging) {
      const dt = now - this.lastTime;
      this.offset = (this.offset + this.speed * dt * 0.06) % this.trackWidth;
      this.setOffset();
    }
    this.lastTime = now;
    this.rafId = requestAnimationFrame(this.tick);
  };

  private setOffset() {
    if (this.trackRef) {
      this.trackRef.nativeElement.style.transform = `translate3d(${-this.offset}px, 0, 0)`;
    }
  }

  onEnter() { this.isPaused.set(true); }
  onLeave() { this.isPaused.set(false); }

  // Mouse drag
  onPointerDown(e: MouseEvent) {
    this.dragging = true;
    this.dragStartX = e.clientX;
    this.dragStartOffset = this.offset;
    this.isPaused.set(true);
  }

  onPointerMove(e: MouseEvent) {
    if (!this.dragging) return;
    const dx = e.clientX - this.dragStartX;
    this.offset = Math.max(0, Math.min(this.trackWidth * 2, this.dragStartOffset - dx));
    this.setOffset();
  }

  onPointerUp() {
    if (!this.dragging) return;
    this.dragging = false;
    this.isPaused.set(false);
  }

  // Touch drag
  onTouchStart(e: TouchEvent) {
    this.dragging = true;
    this.dragStartX = e.touches[0].clientX;
    this.dragStartOffset = this.offset;
    this.isPaused.set(true);
  }

  onTouchMove(e: TouchEvent) {
    if (!this.dragging) return;
    const dx = e.touches[0].clientX - this.dragStartX;
    this.offset = Math.max(0, Math.min(this.trackWidth * 2, this.dragStartOffset - dx));
    this.setOffset();
  }
}
