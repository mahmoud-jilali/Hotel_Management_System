import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get('http://localhost:5032/api/rooms');
  }

  countRooms() {
    return this.http.get<{count: number}>('http://localhost:5032/api/rooms/count');
  }

  countAvailableRooms() {
    return this.http.get<{count: number}>('http://localhost:5032/api/rooms/count_available_rooms');
  }

  getRoom(id: number) {
    return this.http.get(`http://localhost:5032/api/rooms/${id}`);
  }

  addRoom(room: any) {
    return this.http.post('http://localhost:5032/api/rooms', room);
  }

  updateRoom(id: number, room: any) {
    return this.http.put(`http://localhost:5032/api/rooms/${id}`, room);
  }

  deleteRoom(id: number) {
    return this.http.delete(`http://localhost:5032/api/rooms/${id}`);
  }
}
