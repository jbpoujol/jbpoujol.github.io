import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { options } from './config/particles.options';

declare const Typewriter: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements AfterViewInit {
  @ViewChild('tw') typewriterElement: ElementRef | undefined;

  id = 'tsparticles';

  particlesOptions: any = options;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initTypeWriter();
  }

  initTypeWriter() {
    const typewriter = new Typewriter(this.typewriterElement?.nativeElement, {
      loop: true,
      delay: 90
    });

    this.renderer.addClass(this.typewriterElement?.nativeElement, 'tw');
    typewriter
      .pauseFor(2500)
      .typeString('A Full Stack Developer specialized in writing <br>Web')
      .pauseFor(300)
      .deleteChars(3)
      .typeString('<span style="color: #ffb510;"><strong>ANGULAR</strong></span> applications ')
      .pauseFor(3000)
      .start();
  }
}
