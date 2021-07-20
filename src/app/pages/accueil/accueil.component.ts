import { Component, OnInit } from '@angular/core';
declare var VANTA: any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    VANTA.DOTS({
      el: '#home-background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: ' 0x#e76f51',
      color2: '0x#f4a261',
      backgroundColor: '0x#264653',
      size: 2.5,
      spacing: 19.0,
    });
  }
}
