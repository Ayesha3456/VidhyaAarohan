import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  steps = [
    { num: '01', title: 'Book Demo', desc: 'Fill the form' },
    { num: '02', title: 'Attend Class', desc: 'Experience teaching' },
    { num: '03', title: 'Join Batch', desc: 'Select timing' },
    { num: '04', title: 'Track Progress', desc: 'Monitor improvement' }
  ];

}