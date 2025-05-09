import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RoomtypesService } from '../../../../services/roomtypes/roomtypes.service';

@Component({
  selector: 'app-create-room-types-modal',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './create-room-types-modal.component.html',
  styleUrl: './create-room-types-modal.component.css'
})
export class CreateRoomTypesModalComponent {
    @Input() isOpen: boolean = false;
    @Output() closeModal = new EventEmitter<void>();
    @Output() roomTypeCreated = new EventEmitter<any>();

    faXmark = faXmark;

    roomTypesService = inject(RoomtypesService)

    addRoomType: any = {
      name: '',
      description: '',
    }

  onSave() {
    this.roomTypesService.addRoomType(this.addRoomType).subscribe((res: any) => {
      this.roomTypeCreated.emit(res);
      this.closeModal.emit();
    }, (error) => {
      console.error('Error creating room type:', error);
    });
  }
}
