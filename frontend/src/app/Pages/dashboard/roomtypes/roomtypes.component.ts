import { Component, inject, OnInit } from '@angular/core';
import { SidenavComponent } from "../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../Components/navbar/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RoomtypesService } from '../../../services/roomtypes/roomtypes.service';
import { CreateRoomTypesModalComponent } from '../../../Components/modals/roomtypes/create-room-types-modal/create-room-types-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roomtypes',
  standalone: true,
  imports: [SidenavComponent, NavbarComponent, FontAwesomeModule,
    CreateRoomTypesModalComponent, CommonModule
  ],
  templateUrl: './roomtypes.component.html',
  styleUrl: './roomtypes.component.css'
})

export class RoomtypesComponent implements OnInit {

  faPlus = faPlus
  roomTypes: any[] = [];
  isCreateModalOpen = false;

  roomTypesService = inject(RoomtypesService);

  ngOnInit(): void {
    this.getRoomTypes()
  }

  getRoomTypes(){
    this.roomTypesService.getRoomTypes().subscribe((res:any) =>{
      this.roomTypes = res;
    })
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  closeCreateModal() {
    this.isCreateModalOpen = false;
  }

  roomTypeCreate(newRoomType: any) {
    // this.roomTypes = [...this.roomTypes, newRoomType];
    // this.closeCreateModal();
  }

}
