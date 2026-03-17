import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent {

  services = [
    { icon: 'bi-building', iconClass: 'icon-blue', title: 'Business Websites', desc: 'Professional websites for your brand' },
    { icon: 'bi-person-badge-fill', iconClass: 'icon-teal', title: 'Portfolio Websites', desc: 'Showcase your work and skills' },
    { icon: 'bi-code-square', iconClass: 'icon-indigo', title: 'Custom Web Apps', desc: 'Tailored solutions for your needs' },
    { icon: 'bi-megaphone-fill', iconClass: 'icon-sky', title: 'Landing Pages', desc: 'High-converting simple pages' }
  ];

  steps = [
    { num: '01', icon: 'bi-chat-dots-fill', title: 'Discuss', desc: 'Understand your requirement' },
    { num: '02', icon: 'bi-palette-fill', title: 'Design', desc: 'Create clean layout' },
    { num: '03', icon: 'bi-code-slash', title: 'Build', desc: 'Develop the website' },
    { num: '04', icon: 'bi-rocket-takeoff-fill', title: 'Launch', desc: 'Deploy and go live' }
  ];
}