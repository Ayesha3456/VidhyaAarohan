import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent {
  services = [
    { icon: 'bi-building', iconClass: 'icon-blue', title: 'Business Websites', desc: 'Clean, professional websites that represent your brand and help you attract customers online.' },
    { icon: 'bi-person-badge-fill', iconClass: 'icon-teal', title: 'Portfolio Websites', desc: 'Showcase your work beautifully. Perfect for freelancers, designers, and developers.' },
    { icon: 'bi-code-square', iconClass: 'icon-indigo', title: 'Custom Web Applications', desc: 'Need something specific? We build tailored web apps for your unique business requirements.' },
    { icon: 'bi-megaphone-fill', iconClass: 'icon-sky', title: 'Landing Pages', desc: 'High-converting, focused pages to promote your product or service effectively.' }
  ];

  techs = ['Angular', 'Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'REST APIs'];

  steps = [
    { num: '01', icon: 'bi-chat-dots-fill', title: 'Requirement Discussion', desc: 'We start with a detailed call to understand your goals, audience, and desired features.' },
    { num: '02', icon: 'bi-palette-fill', title: 'Design', desc: 'A clean wireframe and visual design is prepared and shared for your review and feedback.' },
    { num: '03', icon: 'bi-code-slash', title: 'Development', desc: 'Your website is built using modern, clean code following best practices for performance and SEO.' },
    { num: '04', icon: 'bi-rocket-takeoff-fill', title: 'Testing & Deployment', desc: 'Thoroughly tested across devices, then deployed to a live server — ready for your visitors.' }
  ];
}
