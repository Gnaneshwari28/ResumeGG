import { Component, InjectionToken } from '@angular/core';
import { MapsComponent } from '../maps/maps.component';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details-card',
  standalone: true,
  imports: [MapsComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './personal-details-card.component.html',
  styleUrl: './personal-details-card.component.scss'
})
export class PersonalDetailsCardComponent {

  activeTab: number = 1;  // Default active tab is Skills

  formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', Validators.required],  // name field, with required validation
      email: ['', [Validators.required, Validators.email]],  // email field, with required and email format validation
      msg: ['',Validators.required]
    });
  }

  setActiveTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }


  onSubmit(event:Event): void {
    event.preventDefault();  
    if (this.formData.valid) {
      emailjs.init('SYQqEtBf-rxrqRpeY');
      if (this.formData.valid) {
        const formValues = this.formData.value;
  
        // Email details for the sender
        const senderEmail = {
          to_email: formValues.email,
          subject: "Message Received",
          message: "I got your message. Thank you."
        };

        // Email details for the you
        const yourEmail = {
          to_email: "gnaneshwarigunasekaran@gmail.com",
          subject: `New Message from ${formValues.name}`,
          message: `You have received a new message from ${formValues.name} (${formValues.email}): \n\n ${formValues.msg}`
        };
  
       
  
        // Send email to the sender
        emailjs.send('service_v6amqf9', 'template_owa0whi', senderEmail, 'SYQqEtBf-rxrqRpeY')
          .then((response) => {
            console.log('Sender email sent successfully:', response);
          }).catch((error) => {
            console.error('Error sending email to sender:', error);
          });
  
        // Send email to yourself
        emailjs.send('service_v6amqf9', 'template_44ybezk',yourEmail, 'SYQqEtBf-rxrqRpeY')
          .then((response) => {
            console.log('Your email sent successfully:', response);
          }).catch((error) => {
            console.error('Error sending email to yourself:', error);
          });
      } else {
        console.log('Form is invalid!');
      }
    }
    

    
    }
  
   

}
