import { Component, inject, OnInit } from '@angular/core';
import { SidenavComponent } from "../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../Components/navbar/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RoomtypesService } from '../../../services/roomtypes/roomtypes.service';
import { CreateRoomTypesModalComponent } from '../../../Components/modals/roomtypes/create-room-types-modal/create-room-types-modal.component';
import { CommonModule } from '@angular/common';
import { UpdateRoomTypesModalComponent } from "../../../Components/modals/roomtypes/update-room-types-modal/update-room-types-modal.component";
import { DeleteRoomTypesModalComponent } from "../../../Components/modals/roomtypes/delete-room-types-modal/delete-room-types-modal.component";
import { RoomTypeModalComponent } from "../../../Components/modals/roomtypes/room-type-modal/room-type-modal.component";

@Component({
  selector: 'app-roomtypes',
  standalone: true,
  imports: [SidenavComponent, NavbarComponent, FontAwesomeModule,
    CreateRoomTypesModalComponent, CommonModule, UpdateRoomTypesModalComponent,
    DeleteRoomTypesModalComponent, RoomTypeModalComponent],
  templateUrl: './roomtypes.component.html',
  styleUrl: './roomtypes.component.css'
})

export class RoomtypesComponent implements OnInit {

  faPlus = faPlus
  roomTypes: any[] = [];
  isCreateModalOpen = false;
  isUpdateModalOpen = false;
  isDeleteModalOpen = false;
  isDetailsModalOpen = false;
  selectedRoomType: any;

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

  openUpdateModal(roomType: any) {
    this.selectedRoomType = roomType;
    this.isUpdateModalOpen = true;
  }

  closeUpdateModal() {
    this.isUpdateModalOpen = false;
  }

  openDeleteModal(roomType: any) {
    this.selectedRoomType = roomType;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  openDetailsModal(roomType: any) {
    this.selectedRoomType = roomType;
    this.isDetailsModalOpen = true;
  }

  closeDetailsModal() {
    this.isDetailsModalOpen = false;
  }

  onSave(newRoomType: any) {
    this.roomTypes = [...this.roomTypes, newRoomType];
    this.closeCreateModal();
  }

  onUpdate(updateRoomType: any) {
    this.roomTypes = [...this.roomTypes, updateRoomType];
    this.closeUpdateModal();
    this.getRoomTypes();
  }

  onDelete(deletedRoomType: any) {
    this.roomTypes = [...this.roomTypes, deletedRoomType];
    this.getRoomTypes()
    this.closeDeleteModal();
  }

}
