import {Component} from '@angular/core';
import { faAngular, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faAngular = faAngular;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
