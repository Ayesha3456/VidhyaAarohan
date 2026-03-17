import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface TopicScore {
  topic: string;
  sessions: string;
  quiz: number;
  maxQuiz: number;
  homework: number[];
  level: 'Excellent' | 'Good' | 'Average' | 'Needs Work';
  remarks: string;
}

export interface StudentReport {
  id: number;
  studentName: string;
  parentName: string;
  studentClass: string;
  batch: string;
  month: string;
  sessionsAttended: number;
  totalSessions: number;
  homeworkSubmitted: number;
  totalHomework: number;
  overallGrade: string;
  teacherComment: string;
  nextTestDate: string;
  nextSession: string;
  focusTopic: string;
  topics: TopicScore[];
}

@Component({
  selector: 'app-progress-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progress-reports.component.html',
  styleUrls: ['./progress-reports.component.css']
})
export class ProgressReportsComponent implements OnInit {

  students: StudentReport[] = [
    {
      id: 1,
      studentName: 'Arjun Sharma',
      parentName: 'Priya Sharma',
      studentClass: 'Class 5',
      batch: 'Evening 6 PM',
      month: 'March 2025',
      sessionsAttended: 10,
      totalSessions: 12,
      homeworkSubmitted: 9,
      totalHomework: 10,
      overallGrade: 'B+',
      teacherComment: 'Arjun has shown excellent improvement in Fractions (Basic), Area & Perimeter, and Decimals this month. Word Problems and Unlike Fractions need more attention. I recommend 15 minutes of daily practice at home focusing on reading word problems carefully. Homework submission also needs to improve. Overall a very positive month — the improvement from last month is clearly visible. Keep it up!',
      nextTestDate: '15 April 2025',
      nextSession: 'Monday, 6 PM',
      focusTopic: 'Word Problems',
      topics: [
        { topic: 'Fractions – Basic',  sessions: '4/4', quiz: 18, maxQuiz: 20, homework: [1,1,1], level: 'Excellent',  remarks: 'Concepts very clear' },
        { topic: 'Fractions – Unlike', sessions: '3/4', quiz: 12, maxQuiz: 20, homework: [1,1,0], level: 'Average',    remarks: 'Needs more practice' },
        { topic: 'Decimals',           sessions: '4/4', quiz: 17, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Great improvement' },
        { topic: 'Word Problems',      sessions: '4/4', quiz: 11, maxQuiz: 20, homework: [1,0,0], level: 'Needs Work', remarks: 'Homework pending' },
        { topic: 'Mental Math',        sessions: '3/4', quiz: 16, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Good speed' },
        { topic: 'Area & Perimeter',   sessions: '4/4', quiz: 19, maxQuiz: 20, homework: [1,1,1], level: 'Excellent',  remarks: 'Outstanding' }
      ]
    },
    {
      id: 2,
      studentName: 'Meera Iyer',
      parentName: 'Sundar Iyer',
      studentClass: 'Class 6',
      batch: 'Morning 9 AM',
      month: 'March 2025',
      sessionsAttended: 11,
      totalSessions: 12,
      homeworkSubmitted: 10,
      totalHomework: 10,
      overallGrade: 'A',
      teacherComment: 'Meera has been consistently excellent this month. Her performance in Integers and Ratios is outstanding. Algebraic Expressions is a new topic and she is picking it up well. She asks great questions during class and always submits homework on time. Very proud of her progress. Keep maintaining this standard!',
      nextTestDate: '18 April 2025',
      nextSession: 'Tuesday, 9 AM',
      focusTopic: 'Algebraic Expressions',
      topics: [
        { topic: 'Integers',             sessions: '4/4', quiz: 20, maxQuiz: 20, homework: [1,1,1], level: 'Excellent', remarks: 'Perfect score' },
        { topic: 'Fractions & Decimals', sessions: '4/4', quiz: 18, maxQuiz: 20, homework: [1,1,1], level: 'Excellent', remarks: 'Very strong' },
        { topic: 'Ratios',               sessions: '3/4', quiz: 17, maxQuiz: 20, homework: [1,1,1], level: 'Good',      remarks: 'Concept clear' },
        { topic: 'Basic Algebra',        sessions: '4/4', quiz: 15, maxQuiz: 20, homework: [1,1,1], level: 'Good',      remarks: 'Improving steadily' },
        { topic: 'Geometry',             sessions: '4/4', quiz: 16, maxQuiz: 20, homework: [1,1,1], level: 'Good',      remarks: 'Good understanding' }
      ]
    },
    {
      id: 3,
      studentName: 'Rahul Verma',
      parentName: 'Anil Verma',
      studentClass: 'Class 3',
      batch: 'Evening 5 PM',
      month: 'March 2025',
      sessionsAttended: 8,
      totalSessions: 12,
      homeworkSubmitted: 6,
      totalHomework: 10,
      overallGrade: 'C+',
      teacherComment: 'Rahul has the ability but needs to be more consistent. His attendance has dropped this month — missing 4 sessions has affected his understanding of Multiplication and Division. When he attends, he participates well. I strongly recommend improving attendance and daily practice at home. Parents please ensure homework is completed regularly.',
      nextTestDate: '20 April 2025',
      nextSession: 'Wednesday, 5 PM',
      focusTopic: 'Multiplication & Division',
      topics: [
        { topic: '4-digit Numbers',  sessions: '4/4', quiz: 15, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Solid understanding' },
        { topic: 'Multiplication',   sessions: '2/4', quiz: 10, maxQuiz: 20, homework: [1,0,0], level: 'Needs Work', remarks: 'Missed sessions' },
        { topic: 'Division',         sessions: '2/4', quiz: 9,  maxQuiz: 20, homework: [0,1,0], level: 'Needs Work', remarks: 'Needs extra help' },
        { topic: 'Fractions Intro',  sessions: '4/4', quiz: 14, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Good start' },
        { topic: 'Time & Calendar',  sessions: '4/4', quiz: 16, maxQuiz: 20, homework: [1,1,0], level: 'Good',       remarks: 'Concepts clear' }
      ]
    }
  ];

  selectedReport!: StudentReport;

  ngOnInit(): void {
    this.selectedReport = this.students[0];
  }

  selectStudent(student: StudentReport): void {
    this.selectedReport = student;
  }

  getAttendancePct(): number {
    return Math.round((this.selectedReport.sessionsAttended / this.selectedReport.totalSessions) * 100);
  }

  getHomeworkPct(): number {
    return Math.round((this.selectedReport.homeworkSubmitted / this.selectedReport.totalHomework) * 100);
  }

  getAvgQuiz(): number {
    const total = this.selectedReport.topics.reduce((s, t) => s + (t.quiz / t.maxQuiz) * 100, 0);
    return Math.round(total / this.selectedReport.topics.length);
  }

  getBarWidth(t: TopicScore): number {
    return Math.round((t.quiz / t.maxQuiz) * 100);
  }

  getGradeColor(grade: string): string {
    if (grade.startsWith('A')) return '#1D9E75';
    if (grade.startsWith('B')) return '#378ADD';
    if (grade.startsWith('C')) return '#EF9F27';
    return '#E24B4A';
  }

  getLevelClass(level: string): string {
    const m: Record<string, string> = {
      'Excellent':  'level-exc',
      'Good':       'level-good',
      'Average':    'level-avg',
      'Needs Work': 'level-need'
    };
    return m[level] ?? '';
  }

  getBarColor(level: string): string {
    const m: Record<string, string> = {
      'Excellent':  '#1D9E75',
      'Good':       '#378ADD',
      'Average':    '#EF9F27',
      'Needs Work': '#E24B4A'
    };
    return m[level] ?? '#94a3b8';
  }

  downloadPDF(): void {
    const originalTitle = document.title;
    document.title = `Progress_Report_${this.selectedReport.studentName.replace(/ /g,'_')}_${this.selectedReport.month.replace(/ /g,'_')}`;
    window.print();
    document.title = originalTitle;
  }
}
