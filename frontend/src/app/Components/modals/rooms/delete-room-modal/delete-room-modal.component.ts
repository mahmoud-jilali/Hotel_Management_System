import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomsService } from '../../../../services/rooms/rooms.services';

@Component({
  selector: 'app-delete-room-modal',
  imports: [FontAwesomeModule],
  templateUrl: './delete-room-modal.component.html',
  styleUrl: './delete-room-modal.component.css'
})
export class DeleteRoomModalComponent {

  @Input() isOpen: boolean = false;
  @Input() currentRoom: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() roomDeleted = new EventEmitter<any>();

  roomsService = inject(RoomsService)
  faXmark = faXmark;
  rooms: any[] = [];

  getRoom() {
    this.roomsService.getRooms().subscribe((res:any) =>{
      this.rooms = res;
    })
  }

  onDelete() {
    const id = this.currentRoom.id;
    this.roomsService.deleteRoom(id).subscribe((res: any) => {
      this.roomDeleted.emit(res);
      this.closeModal.emit();
    });
  }

}
