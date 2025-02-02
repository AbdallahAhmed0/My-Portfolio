import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sendEmail() {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 
                     document.querySelector('form') as HTMLFormElement, 
                     'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
      });
  }

}
