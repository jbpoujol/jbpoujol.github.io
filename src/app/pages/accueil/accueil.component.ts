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
declare var Typewriter: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements AfterViewInit {
  @ViewChild('prenom', { static: true, read: ElementRef }) prenom:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChild('nom', { static: true, read: ElementRef }) nom:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChild('tw') typewriterElement: ElementRef | undefined;

  lastScroll = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    var typewriter = new Typewriter(this.typewriterElement?.nativeElement, {
      loop: true,
      delay: 75,
    });

    this.renderer.addClass(this.typewriterElement?.nativeElement, 'tw');
    typewriter
      .pauseFor(2500)
      .typeString('A Full Stack Developer specialized in writing <br>Angular')
      .pauseFor(300)
      .deleteChars(7)
      .typeString('<strong>ANGULAR</strong> applications ')
      .typeString(
        '<strong>with a headless <br><span style="color: #F7DF1E;">CMS </span>backend</strong>'
      )
      .pauseFor(3000)
      .start();
  }

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

    if (window.pageYOffset !== 0) {
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
    } else if (window.pageYOffset === 0) {
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-jaune');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-violet');
      this.renderer.removeClass(this.prenom?.nativeElement, 'op-violet');
      this.renderer.removeClass(this.nom?.nativeElement, 'op-jaune');
    }
    // Update the old value
    this.lastScroll = newValue;
  }
}
