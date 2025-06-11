import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { BookingsService } from '../../../../services/bookings/bookings.service';

@Component({
  selector: 'app-new-bookings',
  imports: [DatePipe, CommonModule],
  templateUrl: './new-bookings.component.html',
  styleUrl: './new-bookings.component.css'
})
export class NewBookingsComponent implements OnInit {
  
  newBookings: any[] = [];

  bookingsService = inject(BookingsService);

  ngOnInit(): void {
    this.getNewBookings();
  }

  getNewBookings() {
    this.bookingsService.getNewBookings().subscribe((res: any) => {
      this.newBookings = res;
    });
  }
}
