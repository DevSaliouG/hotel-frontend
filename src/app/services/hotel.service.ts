// src/app/services/hotel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
 // private apiUrl = 'http://localhost:3000/api/hotels';
  private apiUrl = 'http://localhost:3000/api/hotels';

  constructor(private http: HttpClient) { }

  createHotel(hotelData: FormData): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotelData);
  }


 getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erreur dans getHotels:', error);
        return throwError(() => new Error('Erreur de chargement des hôtels'));
      })
    );
  }



  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }
}