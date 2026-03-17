import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  classes = [1,2,3,4,5,6,7,8,9,10];

  form = {
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    studentClass: '',
    message: ''
  };

  sendEmail(e: Event) {
    e.preventDefault();

    if (!this.form.parentName || !this.form.studentName || !this.form.phone || !this.form.studentClass) {
      alert('Please fill all required fields');
      return;
    }

    const subject = `Demo Request - ${this.form.studentName} (Class ${this.form.studentClass})`;

    const body = `
Parent Name: ${this.form.parentName}
Student Name: ${this.form.studentName}
Class: ${this.form.studentClass}
Phone: ${this.form.phone}
Email: ${this.form.email || 'Not provided'}

Message:
${this.form.message || 'None'}
`;

    window.location.href =
      `mailto:amrdigitalacademy00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}