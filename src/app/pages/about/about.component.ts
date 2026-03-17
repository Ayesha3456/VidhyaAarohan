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
    {
      icon: 'bi-mortarboard-fill',
      iconClass: 'icon-blue',
      title: 'MSc in Applied Mathematics',
      desc: 'Strong academic foundation in mathematics'
    },
    {
      icon: 'bi-calculator-fill',
      iconClass: 'icon-indigo',
      title: 'Math Tutor (Classes 1–10)',
      desc: 'Focused on concept clarity and improvement'
    },
    {
      icon: 'bi-people-fill',
      iconClass: 'icon-teal',
      title: 'Small Batch Teaching',
      desc: 'Only 5–6 students for better attention'
    },
    {
      icon: 'bi-code-slash',
      iconClass: 'icon-sky',
      title: 'Web Development',
      desc: 'Also build modern websites for businesses'
    }
  ];

  values = [
    'Concept clarity over memorisation',
    'Patience and individual attention',
    'Honest progress tracking',
    'Small batches for better learning',
    'Simple and structured teaching'
  ];
}