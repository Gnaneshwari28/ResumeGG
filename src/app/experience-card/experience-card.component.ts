import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  popupVisible: boolean = false;  // Controls visibility of the popup
  popupData: { title: string, description: string } | null = null; // Data for the popup


  // Data for Intern and Full-time roles
  popupContent = {
    intern: {
      title: "Software Engineer Intern",
      description: `
        • Developed UIs with Angular 13 and Angular Material.<br>
        • Optimized routing and forms with lazy loading and RxJS.<br>
        • Built backend services using Spring Boot and Spring Data JPA.<br>
        • Applied Spring Security for role-based access control.`
    },
    engineer: {
      title: "Software Engineer",
      description: `
        • Enhanced frontend/backend with Angular 13, Spring Boot, and NGRX.<br>
        • Built responsive UIs with Angular Material, optimized forms, and performance.<br>
        • Developed REST APIs, handled exceptions, and managed Spring Boot Profiles.<br>
        • Implemented logging and monitoring for backend observability.`

    }
  };

  // Function to show the respective popup when a timeline item is clicked
  showPopup(role: 'intern' | 'engineer'): void {
    this.popupData = this.popupContent[role];
    this.popupVisible = true;
  }

    // Generate an array with 100 elements
    particlesArray = Array(100).fill(0);

  // Function to close the popup
  closePopup(): void {
    this.popupVisible = false;
  }

  triggerExplosion(): void {
    document.querySelector('.popup-content')?.classList.add('exploding');
    setTimeout(() => this.closePopup(), 700); // Hide popup after explosion animation
  }
  

}
