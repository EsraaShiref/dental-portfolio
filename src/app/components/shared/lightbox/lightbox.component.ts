import {
  Component, Input, Output, EventEmitter,
  OnInit, OnDestroy, HostListener, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../../models';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease', style({ opacity: 0 })),
      ]),
    ]),
    trigger('imgAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class LightboxComponent implements OnInit, OnDestroy {
  @Input() images: GalleryImage[] = [];
  @Input() initialIndex = 0;
  @Output() close = new EventEmitter<void>();

  current = signal(0);

  ngOnInit() {
    this.current.set(this.initialIndex);
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  prev(e: Event) {
    e.stopPropagation();
    this.current.update(c => (c - 1 + this.images.length) % this.images.length);
  }

  next(e: Event) {
    e.stopPropagation();
    this.current.update(c => (c + 1) % this.images.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.close.emit();
    if (e.key === 'ArrowLeft') this.current.update(c => (c - 1 + this.images.length) % this.images.length);
    if (e.key === 'ArrowRight') this.current.update(c => (c + 1) % this.images.length);
  }
}
