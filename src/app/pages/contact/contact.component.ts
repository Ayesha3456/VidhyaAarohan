import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Backup Google Form URL
  formUrl = 'https://forms.gle/gBgYmbwZRfvia9Y96';

  // Dummy submit function (replace with backend API call if needed)
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Thank you! Demo request submitted successfully.');
      form.reset();
    }
  }
}