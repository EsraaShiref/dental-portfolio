import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { GalleryImage } from '../../models';
import { BeforeAfterSliderComponent } from '../shared/before-after-slider/before-after-slider.component';
import { LightboxComponent } from '../shared/lightbox/lightbox.component';

interface ImagePair {
  before: GalleryImage;
  after: GalleryImage | null;
  index: number;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, BeforeAfterSliderComponent, LightboxComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  data = inject(PortfolioDataService);

  activeTab = signal('restorative');

  tabs = [
    { value: 'restorative', label: 'Restorative' },
    { value: 'prosthodontics', label: 'Prosthodontics' },
    { value: 'endodontics', label: 'Endodontics' },
    { value: 'surgery', label: 'Surgery' },
    { value: 'bleaching', label: 'Bleaching' },
  ];

  // Visible pairs per tab
  visiblePairs: Record<string, number> = {
    restorative: 6,
    prosthodontics: 6,
    surgery: 6,
    bleaching: 99,
    endodontics: 99,
  };

  // Lightbox state
  lightboxImages = signal<GalleryImage[]>([]);
  lightboxIndex = signal(0);
  lightboxOpen = signal(false);

  openLightbox(images: GalleryImage[], index: number) {
    this.lightboxImages.set(images);
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
  }

  getPairs(images: GalleryImage[], tab: string): ImagePair[] {
    const pairs: ImagePair[] = [];
    const limit = this.visiblePairs[tab] ?? 6;
    for (let i = 0; i < Math.min(images.length, limit * 2); i += 2) {
      pairs.push({ before: images[i], after: images[i + 1] ?? null, index: i });
    }
    return pairs;
  }

  getTotalPairs(images: GalleryImage[]): number {
    return Math.ceil(images.length / 2);
  }

  hasMore(images: GalleryImage[], tab: string): boolean {
    return this.getTotalPairs(images) > (this.visiblePairs[tab] ?? 6);
  }

  showMore(tab: string) {
    this.visiblePairs[tab] = (this.visiblePairs[tab] ?? 6) + 6;
  }

  remaining(images: GalleryImage[], tab: string): number {
    return this.getTotalPairs(images) - (this.visiblePairs[tab] ?? 6);
  }
}
