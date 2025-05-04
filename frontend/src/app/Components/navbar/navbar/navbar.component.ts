import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faMagnifyingGlass, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBell = faBell
  faMagnifyingGlass = faMagnifyingGlass
  faBars = faBars
  faChevronDown = faChevronDown

}
