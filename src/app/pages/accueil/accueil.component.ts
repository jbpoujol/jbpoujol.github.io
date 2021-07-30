import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';

declare var Typewriter: any;

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit, AfterViewInit {
  @ViewChild('prenom', { static: true, read: ElementRef }) prenom:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChild('nom', { static: true, read: ElementRef }) nom:
    | ElementRef<HTMLElement>
    | undefined;

  @ViewChild('tw') typewriterElement: ElementRef | undefined;

  lastScroll = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.disableScroll(true);
    this.sectionOneScrollAnimations();

    this.initAnimations();
  }

  ngAfterViewInit() {
    var typewriter = new Typewriter(this.typewriterElement?.nativeElement, {
      loop: true,
      delay: 90,
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

  disableScroll(disabled: boolean): void {
    const body = this.document.querySelector('body');
    if (body) {
      if (disabled) {
        body.style.overflowY = 'hidden';
      } else {
        body.style.overflowY = 'auto';
      }
    }
  }

  initAnimations(): void {
    if (this.prenom) {
      gsap.from(this.prenom.nativeElement.childNodes, {
        delay: 0.4,
        duration: 1.5,
        y: -450,
        opacity: 0,
        stagger: 0.15,
      });
    }
    if (this.nom) {
      gsap.from(this.nom.nativeElement.childNodes, {
        delay: 0.7,
        duration: 1.2,
        y: -750,
        opacity: 0,
        stagger: 0.1,
        onComplete: () => this.disableScroll(false),
      });
    }
  }

  sectionOneScrollAnimations(): void {
    if (this.prenom) {
      gsap.to(this.prenom.nativeElement.childNodes, {
        scrollTrigger: {
          trigger: this.prenom.nativeElement,
          scrub: true,
          start: '-200px top',
        },
        duration: 1.5,
        y: -650,
        opacity: 0,
        stagger: 0.15,
      });
    }
    if (this.nom) {
      gsap.to(this.nom.nativeElement.childNodes, {
        scrollTrigger: {
          trigger: this.nom.nativeElement,
          scrub: true,
          start: '40% center',
        },
        duration: 1.2,
        y: -750,
        opacity: 0.3,
        stagger: 0.1,
      });
    }
  }

  /* 
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
  } */
}
