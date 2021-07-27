import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('ham') ham: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  onNavigate() {
    this.renderer.removeClass(this.ham?.nativeElement, 'active');
  }
}
