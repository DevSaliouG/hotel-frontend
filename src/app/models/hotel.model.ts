// src/app/models/hotel.model.ts
export interface Hotel {
  _id?: string;
  name: string;
  email: string;
  pricePerNight: number;
  address: string;
  phoneNumber: string;
  currency: string;
  image?: string;
}