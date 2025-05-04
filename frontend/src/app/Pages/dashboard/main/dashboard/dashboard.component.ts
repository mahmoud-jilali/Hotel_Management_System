import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../Components/navbar/navbar/navbar.component';
import { SidenavComponent } from "../../../../Components/sidenav/sidenav.component";
import { RouterOutlet, RouterLink } from '@angular/router';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [NavbarComponent, SidenavComponent, RouterOutlet, RouterLink, FontAwesomeModule]
})
export class DashboardComponent implements OnInit {

  faArrowRight = faArrowRight
  count!: number

  roomTypesService = inject(RoomtypesService)

  ngOnInit(): void {
    this.roomTypesCount()
  }

  roomTypesCount() {
    this.roomTypesService.countRoomTypes().subscribe((res: any) => {
      this.count = res.count;
    });
  }
}
