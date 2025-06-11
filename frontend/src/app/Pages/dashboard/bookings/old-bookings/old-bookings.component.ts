import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { BookingsService } from '../../../../services/bookings/bookings.service';

@Component({
  selector: 'app-old-bookings',
  imports: [DatePipe, CommonModule],
  templateUrl: './old-bookings.component.html',
  styleUrl: './old-bookings.component.css'
})
export class OldBookingsComponent implements OnInit {

  oldBookings: any[] = [];

  bookingsService = inject(BookingsService);

  ngOnInit(): void {
    this.getOldBookings();
  }

  getOldBookings() {
    this.bookingsService.getOldBookings().subscribe((res: any) => {
      this.oldBookings = res;
    });
  }
}
