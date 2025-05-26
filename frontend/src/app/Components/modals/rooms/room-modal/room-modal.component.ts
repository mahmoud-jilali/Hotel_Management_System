import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-modal',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './room-modal.component.html',
  styleUrl: './room-modal.component.css'
})
export class RoomModalComponent {
  @Input() isOpen: boolean = false;
  @Input() roomDetails: any;
  @Output() closeModal = new EventEmitter<void>();

  faXmark = faXmark;
}
