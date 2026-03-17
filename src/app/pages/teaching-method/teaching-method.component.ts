import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teaching-method',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teaching-method.component.html',
  styleUrls: ['./teaching-method.component.css']
})
export class TeachingMethodComponent {
  methods = [
    {
      icon: 'bi-layers-fill', iconClass: 'icon-blue',
      title: 'Step-by-Step Concept Explanation',
      desc: 'Every topic is broken down into small, logical steps. We never skip fundamentals — students understand the "why" behind every rule and formula.',
      points: ['Builds lasting understanding', 'No rote memorisation', 'Foundation-first approach']
    },
    {
      icon: 'bi-image-fill', iconClass: 'icon-teal',
      title: 'Visual Examples & Diagrams',
      desc: 'Abstract math concepts are made concrete using diagrams, number lines, shapes, and colourful visual aids that help students "see" the math.',
      points: ['Diagrams for geometry', 'Number lines for fractions', 'Visual word problems']
    },
    {
      icon: 'bi-puzzle-fill', iconClass: 'icon-indigo',
      title: 'Math Puzzles & Quizzes',
      desc: 'Fun quizzes and logic puzzles at the end of each session make learning enjoyable and help assess understanding without the pressure of formal tests.',
      points: ['Weekly mini quizzes', 'Logic brain-teasers', 'Speed math challenges']
    },
    {
      icon: 'bi-file-earmark-text-fill', iconClass: 'icon-sky',
      title: 'Practice Worksheets',
      desc: 'Structured worksheets aligned with CBSE syllabus are shared after each session. Practice at home reinforces what was taught during the live class.',
      points: ['Topic-wise worksheets', 'Graded difficulty levels', 'CBSE-aligned problems']
    },
    {
      icon: 'bi-arrow-repeat', iconClass: 'icon-green',
      title: 'Revision & Doubt Clearing',
      desc: 'Dedicated time in every session is reserved for revising previous topics and resolving student doubts. No question is too small.',
      points: ['Regular topic revision', 'Open doubt-clearing sessions', 'Exam preparation support']
    }
  ];
}
