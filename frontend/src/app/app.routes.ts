import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/auth/login/login/login.component';
import { RegisterComponent } from './Pages/auth/register/register/register.component';
import { DashboardComponent } from './Pages/dashboard/main/dashboard/dashboard.component';
import { RoomsComponent } from './Pages/dashboard/rooms/rooms/rooms.component';
import { BookingsComponent } from './Pages/dashboard/bookings/bookings.component';
import { RoomtypesComponent } from './Pages/dashboard/roomtypes/roomtypes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'rooms',
                component: RoomsComponent,
            },
            {
                path: 'bookings',
                component: BookingsComponent,
            },
            {
                path: 'roomtypes',
                component: RoomtypesComponent,
            }
        ]
    }
];
