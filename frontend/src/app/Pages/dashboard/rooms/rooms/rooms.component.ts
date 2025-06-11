import { Component, inject, OnInit } from '@angular/core';
import { SidenavComponent } from "../../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../../Components/navbar/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RoomsService } from '../../../../services/rooms/rooms.services';
import { CreateRoomModalComponent } from "../../../../Components/modals/rooms/create-room-modal/create-room-modal.component";
import { CommonModule } from '@angular/common';
import { DeleteRoomModalComponent } from "../../../../Components/modals/rooms/delete-room-modal/delete-room-modal.component";
import { UpdateRoomModalComponent } from "../../../../Components/modals/rooms/update-room-modal/update-room-modal.component";
import { RoomModalComponent } from "../../../../Components/modals/rooms/room-modal/room-modal.component";

@Component({
  selector: 'app-rooms',
  imports: [SidenavComponent, NavbarComponent, FontAwesomeModule, CreateRoomModalComponent, CommonModule, 
    DeleteRoomModalComponent, UpdateRoomModalComponent, RoomModalComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  faPlus = faPlus
  rooms: any[] = [];
  isCreateModalOpen = false;
  isUpdateModalOpen = false;
  isDeleteModalOpen = false;
  isDetailsModalOpen = false;
  selectedRoom: any;

  roomsService = inject(RoomsService)

  ngOnInit(): void {
    this.getRooms()
  }

  getRooms(){
    this.roomsService.getRooms().subscribe((res:any) => {
      this.rooms = res;
    })
  }

  isRoomAvailable(room: any): boolean {
    if (!room.bookings) return true;
    const currentDate = new Date();
    const startDate = new Date(room.bookings.startDate);
    const endDate = new Date(room.bookings.endDate);
    return !(currentDate >= startDate && currentDate <= endDate);
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  closeCreateModal() {
    this.isCreateModalOpen = false;
  }

  openUpdateModal(room: any) {
    this.selectedRoom = room;
    this.isUpdateModalOpen = true;
  }

  closeUpdateModal() {
    this.isUpdateModalOpen = false;
  }

  openDeleteModal(room: any) {
    this.selectedRoom = room;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  openDetailsModal(room: any) {
    this.selectedRoom = room;
    this.isDetailsModalOpen = true;
  }

  closeDetailsModal() {
    this.isDetailsModalOpen = false;
  }

  onSave(newRoom: any) {
    this.rooms = [...this.rooms, newRoom];
    this.closeCreateModal();
  }

  onUpdate(updateRoom: any) {
    this.rooms = [...this.rooms, updateRoom];
    this.closeUpdateModal();
    this.getRooms();
  }

  onDelete(deletedRoom: any) {
    this.rooms = [...this.rooms, deletedRoom];
    this.getRooms()
    this.closeDeleteModal();
  }

}
