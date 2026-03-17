import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  private readonly ACADEMY_EMAIL = 'amrdigitalacademy00@gmail.com';
  private readonly WHATSAPP_NUMBER = '91XXXXXXXXXX'; // Replace with actual WhatsApp number

  private getField(id: string): string {
    return (document.getElementById(id) as HTMLInputElement)?.value?.trim() ?? '';
  }

  private validate(): boolean {
    const required = ['parentName', 'studentName', 'phone', 'studentClass'];
    return required.every(id => this.getField(id) !== '');
  }

  private buildMessage(): { subject: string; body: string } {
    const parentName   = this.getField('parentName');
    const studentName  = this.getField('studentName');
    const phone        = this.getField('phone');
    const email        = this.getField('emailAddr');
    const cls          = this.getField('studentClass');
    const type         = this.getField('enquiryType');
    const msg          = this.getField('message');

    const subject = `[AMR Digital Academy] ${type} – ${studentName} (${cls})`;

    const body = [
      `Hello,`,
      ``,
      `I would like to enquire about: ${type}`,
      ``,
      `--- Student Details ---`,
      `Parent / Guardian Name : ${parentName}`,
      `Student Name           : ${studentName}`,
      `Student Class          : ${cls}`,
      `Phone / WhatsApp       : ${phone}`,
      `Email                  : ${email || 'Not provided'}`,
      ``,
      `--- Message ---`,
      msg || 'No additional message.',
      ``,
      `Thank you.`,
    ].join('\n');

    return { subject, body };
  }

  sendViaEmail(): void {
    const errorEl = document.getElementById('formError');
    if (!this.validate()) {
      errorEl?.classList.remove('d-none');
      return;
    }
    errorEl?.classList.add('d-none');

    const { subject, body } = this.buildMessage();
    const mailtoUrl = `mailto:${this.ACADEMY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    this.showSuccess();
  }

  sendViaWhatsApp(): void {
    const errorEl = document.getElementById('formError');
    if (!this.validate()) {
      errorEl?.classList.remove('d-none');
      return;
    }
    errorEl?.classList.add('d-none');

    const parentName  = this.getField('parentName');
    const studentName = this.getField('studentName');
    const phone       = this.getField('phone');
    const cls         = this.getField('studentClass');
    const type        = this.getField('enquiryType');
    const msg         = this.getField('message');

    const text = [
      `Hello AMR Digital Academy!`,
      ``,
      `*Enquiry: ${type}*`,
      `Parent Name  : ${parentName}`,
      `Student Name : ${studentName}`,
      `Class        : ${cls}`,
      `Phone        : ${phone}`,
      msg ? `Message : ${msg}` : '',
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    this.showSuccess();
  }

  private showSuccess(): void {
    const form    = document.getElementById('contactForm');
    const success = document.getElementById('successMsg');
    if (form)    form.classList.add('d-none');
    if (success) success.classList.remove('d-none');
  }

  resetForm(): void {
    const form    = document.getElementById('contactForm');
    const success = document.getElementById('successMsg');
    if (form)    form.classList.remove('d-none');
    if (success) success.classList.add('d-none');
    ['parentName','studentName','phone','emailAddr','message'].forEach(id => {
      const el = document.getElementById(id) as HTMLInputElement;
      if (el) el.value = '';
    });
    const cls  = document.getElementById('studentClass') as HTMLSelectElement;
    const type = document.getElementById('enquiryType') as HTMLSelectElement;
    if (cls)  cls.selectedIndex  = 0;
    if (type) type.selectedIndex = 0;
  }
}
