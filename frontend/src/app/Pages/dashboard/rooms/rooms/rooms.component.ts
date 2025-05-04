import { Component } from '@angular/core';
import { SidenavComponent } from "../../../../Components/sidenav/sidenav.component";
import { NavbarComponent } from "../../../../Components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-rooms',
  imports: [SidenavComponent, NavbarComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

}
