import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-math-tuition',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './math-tuition.component.html',
  styleUrls: ['./math-tuition.component.css']
})
export class MathTuitionComponent {

  classes = [
    { num: '1', topics: ['Numbers 1–100', 'Basic Addition', 'Basic Subtraction', 'Shapes', 'Patterns'] },
    { num: '2', topics: ['Numbers up to 1000', 'Addition & Subtraction', 'Multiplication Intro', 'Measurement', 'Data Handling'] },
    { num: '3', topics: ['4-digit Numbers', 'Multiplication', 'Division', 'Fractions Intro', 'Time & Calendar'] },
    { num: '4', topics: ['Large Numbers', 'Factors & Multiples', 'Fractions', 'Decimals Intro', 'Geometry Basics'] },
    { num: '5', topics: ['Fractions & Decimals', 'Percentages Intro', 'Area & Perimeter', 'Data Handling', 'Mental Math'] },
    { num: '6', topics: ['Integers', 'Fractions & Decimals', 'Ratios', 'Basic Algebra', 'Geometry'] },
    { num: '7', topics: ['Rational Numbers', 'Algebraic Expressions', 'Lines & Angles', 'Triangles', 'Word Problems'] },
    { num: '8', topics: ['Linear Equations', 'Quadrilaterals', 'Data Handling', 'Exponents', 'Mensuration'] }
  ];

  topics = [
    { icon: 'bi-123', label: 'Numbers & Operations' },
    { icon: 'bi-pie-chart-fill', label: 'Fractions' },
    { icon: 'bi-dot', label: 'Decimals' },
    { icon: 'bi-triangle', label: 'Geometry Basics' },
    { icon: 'bi-chat-text-fill', label: 'Word Problems' },
    { icon: 'bi-puzzle-fill', label: 'Logical Thinking' }
  ];

  format = [
    { icon: 'bi-camera-video-fill', iconClass: 'icon-blue', label: 'Online Live Classes', detail: 'Interactive sessions via video call with whiteboard tools.' },
    { icon: 'bi-calendar-week-fill', iconClass: 'icon-teal', label: '2–3 Sessions / Week', detail: 'Consistent schedule to build steady learning momentum.' },
    { icon: 'bi-clock-fill', iconClass: 'icon-sky', label: '60-Minute Sessions', detail: 'Focused duration — enough depth without fatigue.' },
    { icon: 'bi-people-fill', iconClass: 'icon-indigo', label: 'Small Batch (5–6 Students)', detail: 'Every student gets personal attention and doubt clearance.' }
  ];
}