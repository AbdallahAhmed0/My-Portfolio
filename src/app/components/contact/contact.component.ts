import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showSuccess = false;
  showError = false;

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent page refresh
    emailjs.sendForm('service_g1nn42h', 'template_4jwyzx3', 
                     document.querySelector('form') as HTMLFormElement, 
                     'UTwClt9XzngfiZg6w')
                     .then(() => {
                      this.showSuccess = true;
                    })
                    .catch(() => {
                      this.showError = true;
                    });
                  }
                
                  closeDialog() {
                    this.showSuccess = false;
                    this.showError = false;
                  }
}
