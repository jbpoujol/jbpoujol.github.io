import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  @ViewChild('ham') ham: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  onNavigate() {
    this.renderer.removeClass(this.ham?.nativeElement, 'active');
  }
}
