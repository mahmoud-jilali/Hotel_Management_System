import { Component, EventEmitter, Output, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomsService } from '../../../../services/rooms/rooms.services';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';

@Component({
  selector: 'app-update-room-modal',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './update-room-modal.component.html',
  styleUrl: './update-room-modal.component.css'
})
export class UpdateRoomModalComponent implements OnChanges {

  @Input() isOpen: boolean = false;
  @Input() currentRoom: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() roomUpdated = new EventEmitter<any>();

  roomsService = inject(RoomsService)
  roomTypesService = inject(RoomtypesService)

  faXmark = faXmark;
  roomTypes: any[] = []
  updateRoom: any = {
    roomTypeName: '',
    price: '',
    description: '',
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentRoom'] && this.currentRoom) {
      this.updateRoom = { ...this.currentRoom };
    }
    if (this.currentRoom.roomType) {
      this.updateRoom.roomTypeName = this.currentRoom.roomType.name;
    }
  }

  ngOnInit(): void {
    this.getRoomTypes()
  }

  getRoomTypes(){
    this.roomTypesService.getRoomTypes().subscribe((res:any) =>{
      this.roomTypes = res;
    })
  }

  onRoomTypeSelected(event: any) {
    this.updateRoom.roomTypeName = event.target[event.target.selectedIndex].text;
  }

  onUpdate() {
    const id = this.updateRoom.id;
    this.roomsService.updateRoom(id, this.updateRoom).subscribe((res: any) => {
      this.roomUpdated.emit(res);
      this.closeModal.emit();
    });
  }

}
