import { Directive, ElementRef, AfterViewInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  readonly revealClass = input('reveal');
  readonly delay = input(0);

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const el = this.el.nativeElement;
    const cls = this.revealClass();
    el.classList.add(cls);
    if (this.delay()) {
      el.style.transitionDelay = `${this.delay()}s`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          this.observer?.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
