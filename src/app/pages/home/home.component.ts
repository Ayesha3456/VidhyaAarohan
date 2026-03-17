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
  benefits = [
    { icon: 'bi-lightbulb-fill', iconClass: 'icon-blue', title: 'Concept Clarity', desc: 'Every topic is taught from the ground up. Students build strong fundamentals — no rote learning.' },
    { icon: 'bi-book-fill', iconClass: 'icon-teal', title: 'Homework Support', desc: 'Dedicated time for homework help ensures students never feel stuck after class.' },
    { icon: 'bi-trophy-fill', iconClass: 'icon-amber', title: 'Confidence Building', desc: 'Regular encouragement and positive reinforcement help students enjoy math rather than fear it.' },
    { icon: 'bi-display-fill', iconClass: 'icon-sky', title: 'Interactive Learning', desc: 'Live sessions with quizzes, puzzles, and visual examples keep students engaged and curious.' },
    { icon: 'bi-people-fill', iconClass: 'icon-indigo', title: 'Small Batches (5–6 Students)', desc: 'Intimate class sizes ensure every student gets personal attention and their doubts are resolved.' },
    { icon: 'bi-graph-up-arrow', iconClass: 'icon-green', title: 'Progress Tracking', desc: 'Monthly progress reports keep parents informed about their child\'s learning journey.' }
  ];

  classes = ['1','2','3','4','5','6','7','8'];

  steps = [
    { num: '01', title: 'Book a Free Demo', desc: 'Fill out our form and we\'ll schedule a free trial class at a convenient time.' },
    { num: '02', title: 'Attend Demo Class', desc: 'Your child attends a live 60-minute session to experience our teaching style.' },
    { num: '03', title: 'Join the Batch', desc: 'Choose a batch that fits your schedule and start the learning journey.' },
    { num: '04', title: 'Track Progress', desc: 'Receive regular updates and monthly progress reports on your child\'s improvement.' }
  ];
}
