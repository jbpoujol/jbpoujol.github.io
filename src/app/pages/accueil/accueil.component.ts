import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

declare var Typewriter: any;

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

  ngOnInit(): void {}

  ngAfterViewInit() {
    var typewriter = new Typewriter(this.typewriterElement?.nativeElement, {
      loop: true,
      delay: 90,
    });

    this.renderer.addClass(this.typewriterElement?.nativeElement, 'tw');
    typewriter
      .pauseFor(2500)
      .typeString('A Full Stack Developer specialized in writing <br>Web')
      .pauseFor(300)
      .deleteChars(3)
      .typeString(
        '<span style="color: #ffb510;"><strong>ANGULAR</strong></span> applications '
      )
      .pauseFor(3000)
      .start();
  }
}
