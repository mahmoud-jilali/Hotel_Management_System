import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  getAllBookings() {
    return this.http.get('http://localhost:5032/api/bookings');
  }

  getOldBookings() {
    return this.http.get('http://localhost:5032/api/bookings/old_bookings');
  }

  getCurrentBookings() {
    return this.http.get('http://localhost:5032/api/bookings/current_bookings');
  }

  getNewBookings() {
    return this.http.get('http://localhost:5032/api/bookings/new_bookings');
  }
}
