import { Component, EventEmitter, Output, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';

@Component({
  selector: 'app-update-room-types-modal',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './update-room-types-modal.component.html',
  styleUrl: './update-room-types-modal.component.css'
})
export class UpdateRoomTypesModalComponent implements OnChanges {
    @Input() isOpen: boolean = false;
    @Input() currentRoomType: any;
    @Output() closeModal = new EventEmitter<void>();
    @Output() roomTypeUpdated = new EventEmitter<any>();

    roomTypesService = inject(RoomtypesService)

    faXmark = faXmark;
    updateRoomType: any = {
      name: '',
      description: '',
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['currentRoomType'] && this.currentRoomType) {
        this.updateRoomType = { ...this.currentRoomType };
      }
    }

    onUpdate() {
      const id = this.updateRoomType.id;
      this.roomTypesService.updateRoomType(id, this.updateRoomType).subscribe((res: any) => {
        this.roomTypeUpdated.emit(res);
        this.closeModal.emit();
      }, (error) => {
        console.error('Error updating room type:', error);
      });
    }
}
