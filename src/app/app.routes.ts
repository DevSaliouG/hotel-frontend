import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'create-hotel', component: CreateHotelComponent },
  { path: '**', redirectTo: '/hotels' }
];