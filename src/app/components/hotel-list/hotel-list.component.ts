import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  host: { ngSkipHydration: 'true' } // Important pour éviter les erreurs d'hydratation
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe({
      next: (data) => {
        console.log('Données reçues du serveur:', data);
        this.hotels = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur complète:', error);
        this.errorMessage = 'Erreur lors du chargement des hôtels';
        this.isLoading = false;
      }
    });
  }

  getHotelImage(imagePath: string | undefined): string {
    if (!imagePath) {
      return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Correction importante ici
    return `http://localhost:3000${imagePath}`;
  }
}