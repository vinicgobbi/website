import { Directive, ElementRef, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const element = this.elementRef.nativeElement;
      element.classList.add('reveal');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          element.classList.add('is-visible');
          observer.disconnect();
        },
        { threshold: 0.15 },
      );

      observer.observe(element);
    });
  }
}
