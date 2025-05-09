import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomtypesService {

  constructor(private http: HttpClient) { }

  getRoomTypes() {
    return this.http.get('http://localhost:5032/api/room_types');
  }

  countRoomTypes() {
    return this.http.get<{count: number}>('http://localhost:5032/api/room_types/count');
  }

  getRoomType(id: number) {
    return this.http.get(`http://localhost:5032/api/room_types/${id}`);
  }

  addRoomType(roomType: any) {
    return this.http.post('http://localhost:5032/api/room_types', roomType);
  }

  updateRoomType(id: number, roomType: any) {
    return this.http.put(`http://localhost:5032/api/room_types/${id}`, roomType);
  }

  deleteRoomType(id: number) {
    return this.http.delete(`http://localhost:5032/api/room_types/${id}`);
  }
}
