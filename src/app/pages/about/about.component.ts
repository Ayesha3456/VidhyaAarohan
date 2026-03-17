import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    { icon: 'bi-mortarboard-fill', iconClass: 'icon-blue', title: 'MSc in Applied Mathematics', desc: 'Strong academic foundation in advanced mathematics from postgraduate studies.' },
    { icon: 'bi-code-slash', iconClass: 'icon-teal', title: 'Angular Developer', desc: 'Professional experience building modern, scalable web applications using Angular.' },
    { icon: 'bi-calculator-fill', iconClass: 'icon-indigo', title: 'Math Educator', desc: 'Passionate about making math accessible and enjoyable for young learners at all levels.' },
    { icon: 'bi-laptop-fill', iconClass: 'icon-sky', title: 'Full-Stack Capability', desc: 'Experienced with Python, Django, Angular, HTML, CSS — a versatile developer.' }
  ];

  values = [
    'Patience and empathy in teaching',
    'Concept-first, memorisation-last approach',
    'Honest progress tracking for parents',
    'Small batches for real personal attention',
    'Clean, modern web development'
  ];
}
