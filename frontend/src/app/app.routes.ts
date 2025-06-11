import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/auth/login/login/login.component';
import { RegisterComponent } from './Pages/auth/register/register/register.component';
import { DashboardComponent } from './Pages/dashboard/main/dashboard/dashboard.component';
import { RoomsComponent } from './Pages/dashboard/rooms/rooms/rooms.component';
import { BookingsComponent } from './Pages/dashboard/bookings/bookings.component';
import { RoomtypesComponent } from './Pages/dashboard/roomtypes/roomtypes.component';
import { OldBookingsComponent } from './Pages/dashboard/bookings/old-bookings/old-bookings.component';
import { CurrentBookingsComponent } from './Pages/dashboard/bookings/current-bookings/current-bookings.component';
import { NewBookingsComponent } from './Pages/dashboard/bookings/new-bookings/new-bookings.component';
import { AllBookingsComponent } from './Pages/dashboard/bookings/all-bookings/all-bookings.component';

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
                children: [
                    {
                        path: 'all',
                        component: AllBookingsComponent
                    },
                    {
                        path: 'old',
                        component: OldBookingsComponent,
                    },
                    {
                        path: 'current',
                        component: CurrentBookingsComponent,
                    },
                    {
                        path: 'new',
                        component: NewBookingsComponent,
                    }
                ]
            },
            {
                path: 'roomtypes',
                component: RoomtypesComponent,
            }
        ]
    }
];
