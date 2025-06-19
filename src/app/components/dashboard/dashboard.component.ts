import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
   providers: [HotelService],
  imports: [CommonModule,  HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: any = {};

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getDashboardStats().subscribe(
      (data: any) => this.stats = data,
      (error: any) => console.error(error)
    );
  }
}