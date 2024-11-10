import { Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationCardComponent } from './education-card/education-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { PersonalDetailsCardComponent } from './personal-details-card/personal-details-card.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EducationCardComponent,ExperienceCardComponent,PersonalDetailsCardComponent,
    CertificationCardComponent,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'Gnaneshwari Gunasekaran Resume';
  selectedCard : any = null;


  constructor() {}
  
  selectCard(cardId: any): void {
    this.selectedCard = cardId;
  }

   // This will listen for clicks outside the card container
   @HostListener('document:click', ['$event'])
   onClickOutside(event: MouseEvent): void {
     const cardContainer = document.querySelector('.card-scroll-container');
     const cardWrapper = document.querySelector('.card-wrapper');
     const clickedInside = cardWrapper?.contains(event.target as Node) || cardContainer?.contains(event.target as Node);
 
     // If the click is outside the card container and not on a card, close the card
     if (!clickedInside) {
       this.selectedCard = null;
     }
   }


}
