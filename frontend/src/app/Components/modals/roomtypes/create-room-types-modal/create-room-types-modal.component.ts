import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-room-types-modal',
  imports: [FontAwesomeModule],
  templateUrl: './create-room-types-modal.component.html',
  styleUrl: './create-room-types-modal.component.css'
})
export class CreateRoomTypesModalComponent {
    @Input() isOpen: boolean = false;
    @Output() closeModal = new EventEmitter<void>();
    @Output() roomTypeCreated = new EventEmitter<any>();

    faXmark = faXmark;
}
