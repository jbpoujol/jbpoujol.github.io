import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  @ViewChild('prenom', { static: true, read: ElementRef }) prenom:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChild('nom', { static: true, read: ElementRef }) nom:
    | ElementRef<HTMLElement>
    | undefined;

  lastScroll = 0;

  constructor(private renderer: Renderer2) {}

  isElementInView(el: HTMLElement, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  }

  isElementOutofView(el: HTMLElement) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event: Event) {
    // Get the new Value
    let newValue = window.pageYOffset;

    //Subtract the two and conclude
    if (this.lastScroll - newValue < 0) {
      // Down
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-jaune');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-violet');

      this.renderer.addClass(this.prenom?.nativeElement, 'op-violet');
      this.renderer.addClass(this.nom?.nativeElement, 'op-jaune');
    } else if (this.lastScroll - newValue > 0) {
      // Up
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-violet');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-jaune');

      this.renderer.addClass(this.prenom?.nativeElement, 'op-jaune');
      this.renderer.addClass(this.nom?.nativeElement, 'op-violet');
    }
    if (window.pageYOffset === 0) {
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-jaune');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-violet');
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-violet');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-jaune');
    }
    // Update the old value
    this.lastScroll = newValue;
  }
}
