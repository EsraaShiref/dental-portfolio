import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  clinics = [
    'Kfr Elhag Dawood',
    'ElNohkba Clinic',
    'Sehetak Center',
    'Zedan Dental Center',
  ];
}
