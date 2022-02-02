import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Container, Main } from 'tsparticles';
import { options } from './config/particles.options';

declare var Typewriter: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit, AfterViewInit {
  @ViewChild('tw') typewriterElement: ElementRef | undefined;

  id = 'tsparticles';
  particlesOptions = options;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initTypeWriter();
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

  initTypeWriter() {
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
