import {
  Component, Input, Output, EventEmitter,
  ElementRef, ViewChild, OnDestroy, HostListener, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../../models';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './before-after-slider.component.html',
  styleUrls: ['./before-after-slider.component.scss'],
})
export class BeforeAfterSliderComponent implements OnDestroy {
  @Input() before!: GalleryImage;
  @Input() after!: GalleryImage;
  @Input() caseNumber!: number;
  @Output() beforeClick = new EventEmitter<void>();
  @Output() afterClick = new EventEmitter<void>();

  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  pos = signal(50);
  private dragging = false;

  onMouseDown(e: MouseEvent) {
    this.dragging = true;
    this.applyPos(e.clientX);
  }

  onTouchStart(e: TouchEvent) {
    this.dragging = true;
    this.applyPos(e.touches[0].clientX);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.dragging) this.applyPos(e.clientX);
  }

  @HostListener('window:mouseup')
  onMouseUp() { this.dragging = false; }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (this.dragging) this.applyPos(e.touches[0].clientX);
  }

  @HostListener('window:touchend')
  onTouchEnd() { this.dragging = false; }

  private applyPos(clientX: number) {
    const rect = this.containerRef.nativeElement.getBoundingClientRect();
    const clamped = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
    this.pos.set(clamped);
  }

  ngOnDestroy() {}
}
