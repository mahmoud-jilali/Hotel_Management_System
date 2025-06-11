import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { BookingsService } from '../../../../services/bookings/bookings.service';

@Component({
  selector: 'app-all-bookings',
  imports: [DatePipe, CommonModule],
  templateUrl: './all-bookings.component.html',
  styleUrl: './all-bookings.component.css'
})
export class AllBookingsComponent implements OnInit {

  allBookings: any[] = [];

  bookingsService = inject(BookingsService);

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    this.bookingsService.getAllBookings().subscribe((res: any) => {
      this.allBookings = res;
    });
  }
}
