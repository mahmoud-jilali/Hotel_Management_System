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
}
