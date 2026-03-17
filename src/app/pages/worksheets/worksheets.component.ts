import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Question {
  id: number;
  text: string;
  type: 'input' | 'select' | 'truefalse';
  options?: string[];
  answer: string;
  accepted: string[];
  hint?: string;
  userAnswer?: string;
  status?: 'correct' | 'wrong' | '';
}

export interface WorksheetSection {
  title: string;
  questions: Question[];
}

export interface Worksheet {
  id: number;
  studentClass: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  totalMarks: number;
  timeMinutes: number;
  sections: WorksheetSection[];
}

@Component({
  selector: 'app-worksheets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.css']
})
export class WorksheetsComponent {

  worksheets: Worksheet[] = [
    {
      id: 1,
      studentClass: 'Class 3',
      topic: 'Multiplication',
      difficulty: 'Beginner',
      totalMarks: 10,
      timeMinutes: 30,
      sections: [
        {
          title: 'Section A — Fill in the blanks',
          questions: [
            { id:1,  type:'input',  text:'5 × 3 = ?',                            answer:'15',   accepted:['15'] },
            { id:2,  type:'input',  text:'7 × 4 = ?',                            answer:'28',   accepted:['28'] },
            { id:3,  type:'input',  text:'6 × 6 = ?',                            answer:'36',   accepted:['36'] },
            { id:4,  type:'input',  text:'9 × 3 = ?',                            answer:'27',   accepted:['27'] },
          ]
        },
        {
          title: 'Section B — Choose the correct answer',
          questions: [
            { id:5, type:'select', text:'8 × 7 = ?',         options:['54','56','58','60'],  answer:'56', accepted:['56'] },
            { id:6, type:'select', text:'4 × 9 = ?',         options:['32','36','40','45'],  answer:'36', accepted:['36'] },
            { id:7, type:'truefalse', text:'3 × 5 = 5 × 3',  options:['True','False'],       answer:'True', accepted:['true','True'] },
          ]
        },
        {
          title: 'Section C — Word problems',
          questions: [
            { id:8,  type:'input', text:'A box has 6 apples. There are 4 boxes. How many apples in total?',  answer:'24', accepted:['24'] },
            { id:9,  type:'input', text:'Each child gets 3 pencils. There are 8 children. How many pencils?', answer:'24', accepted:['24'] },
            { id:10, type:'input', text:'A row has 7 chairs. There are 5 rows. Total chairs?',               answer:'35', accepted:['35'] },
          ]
        }
      ]
    },
    {
      id: 2,
      studentClass: 'Class 5',
      topic: 'Fractions',
      difficulty: 'Intermediate',
      totalMarks: 11,
      timeMinutes: 40,
      sections: [
        {
          title: 'Section A — Fill in the blanks',
          questions: [
            { id:1, type:'input', text:'½ + ¼ = ?',                               answer:'3/4', accepted:['3/4','¾'] },
            { id:2, type:'input', text:'¾ − ½ = ?',                               answer:'1/4', accepted:['1/4','¼'] },
            { id:3, type:'input', text:'Write equivalent fraction: 2/4 = ?/8',   answer:'4',   accepted:['4'] },
            { id:4, type:'input', text:'⅗ means __ parts out of 5 equal parts',  answer:'3',   accepted:['3'] },
            { id:5, type:'input', text:'Simplify: 6/8 = ?',                       answer:'3/4', accepted:['3/4','¾'] },
          ]
        },
        {
          title: 'Section B — Choose the correct answer',
          questions: [
            { id:6, type:'select',    text:'Which fraction is greater?',  options:['⅔','¾','Equal'],    answer:'¾', accepted:['¾','3/4'] },
            { id:7, type:'select',    text:'¼ + ¼ = ?',                   options:['¼','½','¾','1'],    answer:'½', accepted:['½','1/2','2/4'] },
            { id:8, type:'truefalse', text:'2/6 = 1/3',                   options:['True','False'],     answer:'True', accepted:['true','True'] },
          ]
        },
        {
          title: 'Section C — Word problems',
          questions: [
            { id:9,  type:'input', text:'Riya ate ⅓ of a pizza, her brother ate ¼. How much did they eat together?', answer:'7/12', accepted:['7/12'] },
            { id:10, type:'input', text:'A ribbon is ¾ m long. You cut ¼ m off. How much is left?',                  answer:'1/2',  accepted:['1/2','½','2/4'] },
            { id:11, type:'input', text:'20 students — ⅖ are girls. How many girls?',                                answer:'8',    accepted:['8'] },
          ]
        }
      ]
    },
    {
      id: 3,
      studentClass: 'Class 7',
      topic: 'Algebraic Expressions',
      difficulty: 'Advanced',
      totalMarks: 10,
      timeMinutes: 45,
      sections: [
        {
          title: 'Section A — Fill in the blanks',
          questions: [
            { id:1, type:'input', text:'If x = 3, find: 2x + 5 = ?',           answer:'11',   accepted:['11'] },
            { id:2, type:'input', text:'Simplify: 3a + 2a = ?',                 answer:'5a',   accepted:['5a'] },
            { id:3, type:'input', text:'If y = 4, find: y² = ?',               answer:'16',   accepted:['16'] },
            { id:4, type:'input', text:'Simplify: 4b − b = ?',                 answer:'3b',   accepted:['3b'] },
          ]
        },
        {
          title: 'Section B — Choose the correct answer',
          questions: [
            { id:5, type:'select',    text:'Which is a monomial?',           options:['2x+3','5xy','x+y+z','a-b'],   answer:'5xy',  accepted:['5xy'] },
            { id:6, type:'select',    text:'Value of 3x when x = 6?',       options:['9','12','18','24'],            answer:'18',   accepted:['18'] },
            { id:7, type:'truefalse', text:'2x + 3x = 5x²',                 options:['True','False'],               answer:'False',accepted:['false','False'] },
          ]
        },
        {
          title: 'Section C — Application problems',
          questions: [
            { id:8,  type:'input', text:'Perimeter of a square = 4s. If s = 7 cm, find perimeter.',        answer:'28', accepted:['28','28cm','28 cm'] },
            { id:9,  type:'input', text:'Cost of n pens = 5n. If n = 6, total cost = ?',                   answer:'30', accepted:['30'] },
            { id:10, type:'input', text:'If a = 2, b = 3, find: a + 2b = ?',                               answer:'8',  accepted:['8'] },
          ]
        }
      ]
    }
  ];

  selectedWorksheet: Worksheet = this.worksheets[1];
  studentName = '';
  studentDate = '';
  submitted = false;
  score = 0;

  getAllQuestions(): Question[] {
    return this.selectedWorksheet.sections.flatMap(s => s.questions);
  }

  selectWorksheet(ws: Worksheet): void {
    this.selectedWorksheet = ws;
    this.resetWorksheet();
  }

  checkAnswers(): void {
    let correct = 0;
    this.getAllQuestions().forEach(q => {
      const ua = (q.userAnswer ?? '').trim().toLowerCase();
      const isCorrect = q.accepted.some(a => a.toLowerCase() === ua);
      q.status = ua === '' ? '' : isCorrect ? 'correct' : 'wrong';
      if (isCorrect) correct++;
    });
    this.score = correct;
    this.submitted = true;
  }

  resetWorksheet(): void {
    this.submitted = false;
    this.score = 0;
    this.studentName = '';
    this.studentDate = '';
    this.getAllQuestions().forEach(q => {
      q.userAnswer = '';
      q.status = '';
    });
  }

  getScorePercent(): number {
    return Math.round((this.score / this.selectedWorksheet.totalMarks) * 100);
  }

  getResultClass(): string {
    const pct = this.getScorePercent();
    if (pct >= 80) return 'result-pass';
    if (pct >= 50) return 'result-avg';
    return 'result-fail';
  }

  getResultMessage(): string {
    const pct = this.getScorePercent();
    const s = this.score;
    const t = this.selectedWorksheet.totalMarks;
    if (pct >= 80) return `Excellent! ${s}/${t} correct. Outstanding work — keep it up!`;
    if (pct >= 50) return `Good effort! ${s}/${t} correct. Review the wrong answers and try again.`;
    return `Keep practising! ${s}/${t} correct. Go through the topic again and retry tomorrow.`;
  }

  getDifficultyClass(d: string): string {
    const m: Record<string, string> = {
      'Beginner': 'diff-begin',
      'Intermediate': 'diff-inter',
      'Advanced': 'diff-adv'
    };
    return m[d] ?? '';
  }

  downloadPDF(): void {
    const original = document.title;
    document.title = `Worksheet_${this.selectedWorksheet.studentClass}_${this.selectedWorksheet.topic}`.replace(/ /g, '_');
    window.print();
    document.title = original;
  }
}
