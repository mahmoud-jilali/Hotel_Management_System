import { Component, EventEmitter, Output, Input, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomsService } from '../../../../services/rooms/rooms.services';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';


@Component({
  selector: 'app-create-room-modal',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './create-room-modal.component.html',
  styleUrl: './create-room-modal.component.css'
})
export class CreateRoomModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() roomCreated = new EventEmitter<any>();

  faXmark = faXmark;
  roomTypes: any[] = []

  roomsService = inject(RoomsService)
  roomTypesService = inject(RoomtypesService)

  ngOnInit(): void {
    this.getRoomTypes()
  }

  addRoom: any = {
    roomTypeName: '',
    price: '',
    description: '',
  }

  getRoomTypes(){
    this.roomTypesService.getRoomTypes().subscribe((res:any) =>{
      this.roomTypes = res;
    })
  }

  onRoomTypeSelected(event: any) {
    this.addRoom.roomTypeName = event.target[event.target.selectedIndex].text;
  }
  
  onSave() {
  this.roomsService.addRoom(this.addRoom).subscribe((res: any) => {
    this.roomCreated.emit(res);
    this.closeModal.emit();
  });
}
}
