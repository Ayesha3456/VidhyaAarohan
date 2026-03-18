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

  techStack = ['Angular', 'REST APIs', 'SQL', 'Responsive UI'];

  features = [
    'Clean UI Design',
    'Mobile Responsive',
    'SEO Structure',
    'Fast Performance'
  ];

  services = [
    {
      icon: 'bi-building',
      title: 'Business Websites',
      desc: 'Professional websites built for credibility and growth'
    },
    {
      icon: 'bi-person-badge-fill',
      title: 'Portfolio Websites',
      desc: 'Showcase skills, projects, and personal brand effectively'
    },
    {
      icon: 'bi-code-square',
      title: 'Custom Web Apps',
      desc: 'Scalable and tailored solutions for your requirements'
    },
    {
      icon: 'bi-megaphone-fill',
      title: 'Landing Pages',
      desc: 'High-converting pages focused on results'
    }
  ];

  workflow = [
    { num: '01', title: 'Requirement Discussion', desc: 'Understand goals and scope' },
    { num: '02', title: 'Design & Planning', desc: 'Structure and UI layout' },
    { num: '03', title: 'Development', desc: 'Build with clean, scalable code' },
    { num: '04', title: 'Launch & Support', desc: 'Deploy and ensure smooth performance' }
  ];
}