import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

interface Room {
  id: number;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-room-type-modal',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './room-type-modal.component.html',
  styleUrl: './room-type-modal.component.css'
})
export class RoomTypeModalComponent {
  @Input() isOpen: boolean = false;
  @Input() roomTypeDetails: any;
  @Output() closeModal = new EventEmitter<void>();

  faXmark = faXmark;
}
