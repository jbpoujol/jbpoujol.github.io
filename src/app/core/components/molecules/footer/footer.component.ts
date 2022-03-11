import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
}
