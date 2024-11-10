import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [ MatCardModule, CommonModule ],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
  animations: [
    trigger('flockAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'scale(0.8)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class EducationCardComponent {

  activeImage: string | null = null;
  imageClass: string = '';  

  showDescription(imageId: string): void {
    this.activeImage = imageId;
    this.imageClass = 'burst'; 
  }

  hideDescription(): void {
    this.activeImage = null;
    this.imageClass = 'return';  // Trigger reassemble animation when hiding the description
  setTimeout(() => {
    this.activeImage = null; // Reset the active image after the animation is complete
  }, 600); // Wait for the animation to finish before hiding
    
  }

}
