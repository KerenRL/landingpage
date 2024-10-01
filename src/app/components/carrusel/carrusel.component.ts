import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  images = [
    {url: './assets/Addison.jpg'},
    {url: './assets/Alex.jpg'},
    {url: './assets/Arizona.jpg'},
    {url: './assets/Burck.jpg'},
    {url: './assets/Callie.jpg'},
    {url: './assets/Derek.jpeg'},
    {url: './assets/George.jpg'},
    {url: './assets/Izzy.jpg'},
    {url: './assets/Jackson.jpeg'},
    {url: './assets/Lexie.jpeg'},
    {url: './assets/Mark.jpg'},
    {url: './assets/Meredith.jpg'},
    {url: './assets/Miranda.jpg'},
    {url: './assets/Owen.jpg'},
    {url: './assets/Richard.jpg'}
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  getTransform() {
    const imageWidth = 120;
    return `translateX(-${this.currentIndex * imageWidth}px)`;
  }
}
