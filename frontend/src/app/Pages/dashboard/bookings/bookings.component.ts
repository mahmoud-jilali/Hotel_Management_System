import { Component } from '@angular/core';
import { SidenavComponent } from "../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../Components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-bookings',
  imports: [SidenavComponent, NavbarComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

}
