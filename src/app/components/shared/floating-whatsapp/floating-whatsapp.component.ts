import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WA_LINK } from '../../../services/portfolio-data.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule],
  template: `
<a
  #btn
  [href]="waLink"
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 scale-0"
  style="background-color: #25D366;"
  title="Chat on WhatsApp"
>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2c-5.35 0-9.71 4.352-9.71 9.695 0 1.706.447 3.374 1.296 4.83L2 22l5.563-1.557c1.414.769 3.005 1.176 4.642 1.176h.004c5.348 0 9.719-4.353 9.719-9.697 0-2.592-1.01-5.028-2.853-6.882zM12.02 20.22h-.003c-1.445 0-2.867-.389-4.092-1.117l-.294-.175-3.303.866.882-3.22-.192-.305A8.016 8.016 0 0 1 4.07 11.78c0-4.424 3.598-8.024 8.03-8.024 2.145 0 4.164.838 5.681 2.356a7.973 7.973 0 0 1 2.355 5.66c0 4.423-3.598 8.024-8.022 8.024zm4.404-6.076c-.242-.12-1.425-.703-1.645-.782-.22-.08-.38-.12-.54.12-.16.24-.626.782-.768.942-.142.16-.285.18-.525.06-.24-.12-1.016-.374-1.935-1.156-.715-.608-1.198-1.357-1.339-1.586-.14-.23-.015-.354.11-.47.106-.103.24-.27.36-.406.12-.135.16-.23.24-.385.08-.154.04-.286-.02-.404-.06-.117-.54-1.245-.74-1.705-.196-.447-.396-.386-.54-.394-.14-.006-.3-.008-.46-.008-.16 0-.42.06-.64.288-.22.23-.86.848-.86 2.067 0 1.22.87 2.398.99 2.563.12.166 1.733 2.645 4.2 3.507.586.22 1.044.354 1.4.45.588.18 1.124.155 1.545.094.47-.067 1.456-.594 1.66-1.167.206-.574.206-1.067.144-1.171-.06-.104-.22-.164-.46-.284z"/>
  </svg>
</a>
  `,
  styles: [`
    :host { display: block; }
    a {
      transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease, background-color 0.2s, box-shadow 0.2s;
      transition-delay: 1.5s;
    }
    a:hover { transform: scale(1.1); background-color: #20ba5a !important; }
    a:active { transform: scale(0.93); }
  `]
})
export class FloatingWhatsappComponent implements AfterViewInit {
  waLink = WA_LINK;

  @ViewChild('btn') btnRef?: ElementRef<HTMLAnchorElement>;

  ngAfterViewInit() {
    const el = this.btnRef?.nativeElement;
    if (!el) return;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
    });
  }
}
