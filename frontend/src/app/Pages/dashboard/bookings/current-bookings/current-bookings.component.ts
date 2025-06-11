import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { BookingsService } from '../../../../services/bookings/bookings.service';

@Component({
  selector: 'app-current-bookings',
  imports: [DatePipe, CommonModule],
  templateUrl: './current-bookings.component.html',
  styleUrl: './current-bookings.component.css'
})
export class CurrentBookingsComponent implements OnInit {

  currentBookings: any[] = [];

  bookingsService = inject(BookingsService);

  ngOnInit(): void {
    this.getCurrentBookings();
  }

  getCurrentBookings() {
    this.bookingsService.getCurrentBookings().subscribe((res: any) => {
      this.currentBookings = res;
    });
  }

}
