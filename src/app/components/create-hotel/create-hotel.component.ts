// src/app/components/create-hotel/create-hotel.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    RouterModule,
    HttpClientModule
  ]
})
export class CreateHotelComponent {
  hotelForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  currencies = ['USD', 'EUR', 'XOF', 'JPY', 'CAD', 'MAD'];

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private router: Router
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pricePerNight: ['', [Validators.required, Validators.min(1)]],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9+ ]{8,15}$')]],
      currency: ['', Validators.required],
      image: [null]
    });
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.hotelForm.patchValue({ image: file });
      this.hotelForm.get('image')?.updateValueAndValidity();
      
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      const formData = new FormData();
      formData.append('name', this.hotelForm.value.name);
      formData.append('email', this.hotelForm.value.email);
      formData.append('pricePerNight', this.hotelForm.value.pricePerNight);
      formData.append('address', this.hotelForm.value.address);
      formData.append('phoneNumber', this.hotelForm.value.phoneNumber);
      formData.append('currency', this.hotelForm.value.currency);
      
      if (this.hotelForm.value.image instanceof File) {
      formData.append('image', this.hotelForm.value.image);
    }


      this.hotelService.createHotel(formData).subscribe({
        next: () => this.router.navigate(['/hotels']),
        error: (err) => console.error('Erreur création hôtel:', err)
      });
    }
  }
}