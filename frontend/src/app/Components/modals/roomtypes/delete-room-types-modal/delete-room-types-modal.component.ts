import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';


@Component({
  selector: 'app-delete-room-types-modal',
  imports: [FontAwesomeModule],
  templateUrl: './delete-room-types-modal.component.html',
  styleUrl: './delete-room-types-modal.component.css'
})
export class DeleteRoomTypesModalComponent {
  @Input() isOpen: boolean = false;
  @Input() currentRoomType: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() roomTypeDeleted = new EventEmitter<any>();

  roomTypesService = inject(RoomtypesService)
  faXmark = faXmark;
  roomTypes: any[] = [];

  getRoomType() {
    this.roomTypesService.getRoomTypes().subscribe((res:any) =>{
      this.roomTypes = res;
    })
  }

  onDelete() {
    const id = this.currentRoomType.id;
    this.roomTypesService.deleteRoomType(id).subscribe((res: any) => {
      this.roomTypeDeleted.emit(res);
      this.closeModal.emit();
    }, (error) => {
      console.error('Error deleting room type:', error);
    });
  }
}
