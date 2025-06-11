import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../Components/navbar/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookings',
  imports: [SidenavComponent, NavbarComponent, FontAwesomeModule, RouterLink, RouterOutlet],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  faPlus = faPlus
  
  isCreateModalOpen = false;

  openCreateModal() {
    this.isCreateModalOpen = true;
  }
}
