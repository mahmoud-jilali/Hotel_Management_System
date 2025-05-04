import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faHotel, faBed, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  faHouse = faHouse
  faHotel = faHotel
  faBed = faBed
  faCalendarDays = faCalendarDays


}
