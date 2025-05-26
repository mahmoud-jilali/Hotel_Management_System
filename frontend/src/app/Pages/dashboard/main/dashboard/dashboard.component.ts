import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../Components/navbar/navbar/navbar.component';
import { SidenavComponent } from "../../../../Components/sidenav/sidenav.component";
import { RouterOutlet, RouterLink } from '@angular/router';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RoomsService } from '../../../../services/rooms/rooms.services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [NavbarComponent, SidenavComponent, RouterOutlet, RouterLink, FontAwesomeModule]
})
export class DashboardComponent implements OnInit {

  faArrowRight = faArrowRight
  countRoomTypes!: number
  countRooms!: number
  countAvailableRooms!: number

  roomTypesService = inject(RoomtypesService)
  roomsService = inject(RoomsService)

  ngOnInit(): void {
    this.roomTypesCount()
    this.roomsCount()
    this.availableRoomsCount()
  }

  roomTypesCount() {
    this.roomTypesService.countRoomTypes().subscribe((res: any) => {
      this.countRoomTypes = res.count;
    });
  }

  roomsCount() {
    this.roomsService.countRooms().subscribe((res: any) => {
      this.countRooms = res.count;
    });
  }

  availableRoomsCount() {
    this.roomsService.countAvailableRooms().subscribe((res: any) => {
      this.countAvailableRooms = res.count;
    });
  }
}
