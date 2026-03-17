import { Injectable } from '@angular/core';

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
  parentEmail: string;
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

export interface WorksheetQuestion {
  id: number;
  text: string;
  type: 'input' | 'select' | 'truefalse';
  options?: string[];
  answer: string;
  accepted: string[];
  userAnswer?: string;
  status?: 'correct' | 'wrong' | '';
}

export interface WorksheetSection {
  title: string;
  questions: WorksheetQuestion[];
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

@Injectable({ providedIn: 'root' })
export class StudentDataService {

  students: StudentReport[] = [
    {
      id: 1,
      studentName: 'Arjun Sharma',
      parentName: 'Priya Sharma',
      parentEmail: 'priya.sharma@gmail.com',
      studentClass: 'Class 5',
      batch: 'Evening 6 PM',
      month: 'March 2025',
      sessionsAttended: 10, totalSessions: 12,
      homeworkSubmitted: 9, totalHomework: 10,
      overallGrade: 'B+',
      teacherComment: 'Arjun has shown excellent improvement in Fractions (Basic), Area & Perimeter, and Decimals this month. Word Problems and Unlike Fractions need more attention. I recommend 15 minutes of daily practice at home. Overall a very positive month — improvement from last month is clearly visible. Keep it up!',
      nextTestDate: '15 April 2025', nextSession: 'Monday, 6 PM', focusTopic: 'Word Problems',
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
      parentEmail: 'sundar.iyer@gmail.com',
      studentClass: 'Class 6',
      batch: 'Morning 9 AM',
      month: 'March 2025',
      sessionsAttended: 11, totalSessions: 12,
      homeworkSubmitted: 10, totalHomework: 10,
      overallGrade: 'A',
      teacherComment: 'Meera has been consistently excellent this month. Her performance in Integers and Ratios is outstanding. She asks great questions and always submits homework on time. Very proud of her progress. Keep maintaining this standard!',
      nextTestDate: '18 April 2025', nextSession: 'Tuesday, 9 AM', focusTopic: 'Algebraic Expressions',
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
      parentEmail: 'anil.verma@gmail.com',
      studentClass: 'Class 3',
      batch: 'Evening 5 PM',
      month: 'March 2025',
      sessionsAttended: 8, totalSessions: 12,
      homeworkSubmitted: 6, totalHomework: 10,
      overallGrade: 'C+',
      teacherComment: 'Rahul has the ability but needs to be more consistent. Missing 4 sessions has affected his understanding of Multiplication and Division. I strongly recommend improving attendance and daily practice. Parents please ensure homework is completed regularly.',
      nextTestDate: '20 April 2025', nextSession: 'Wednesday, 5 PM', focusTopic: 'Multiplication & Division',
      topics: [
        { topic: '4-digit Numbers', sessions: '4/4', quiz: 15, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Solid understanding' },
        { topic: 'Multiplication',  sessions: '2/4', quiz: 10, maxQuiz: 20, homework: [1,0,0], level: 'Needs Work', remarks: 'Missed sessions' },
        { topic: 'Division',        sessions: '2/4', quiz: 9,  maxQuiz: 20, homework: [0,1,0], level: 'Needs Work', remarks: 'Needs extra help' },
        { topic: 'Fractions Intro', sessions: '4/4', quiz: 14, maxQuiz: 20, homework: [1,1,1], level: 'Good',       remarks: 'Good start' },
        { topic: 'Time & Calendar', sessions: '4/4', quiz: 16, maxQuiz: 20, homework: [1,1,0], level: 'Good',       remarks: 'Concepts clear' }
      ]
    }
  ];

  worksheets: Worksheet[] = [
    {
      id: 1, studentClass: 'Class 3', topic: 'Multiplication',
      difficulty: 'Beginner', totalMarks: 10, timeMinutes: 30,
      sections: [
        { title: 'Section A — Fill in the blanks', questions: [
          { id:1, type:'input', text:'5 × 3 = ?',  answer:'15', accepted:['15'] },
          { id:2, type:'input', text:'7 × 4 = ?',  answer:'28', accepted:['28'] },
          { id:3, type:'input', text:'6 × 6 = ?',  answer:'36', accepted:['36'] },
          { id:4, type:'input', text:'9 × 3 = ?',  answer:'27', accepted:['27'] },
        ]},
        { title: 'Section B — Choose the correct answer', questions: [
          { id:5, type:'select',    text:'8 × 7 = ?',      options:['54','56','58','60'],  answer:'56',   accepted:['56'] },
          { id:6, type:'select',    text:'4 × 9 = ?',      options:['32','36','40','45'],  answer:'36',   accepted:['36'] },
          { id:7, type:'truefalse', text:'3 × 5 = 5 × 3',  options:['True','False'],       answer:'True', accepted:['true','True'] },
        ]},
        { title: 'Section C — Word problems', questions: [
          { id:8,  type:'input', text:'A box has 6 apples. There are 4 boxes. Total apples?',           answer:'24', accepted:['24'] },
          { id:9,  type:'input', text:'Each child gets 3 pencils. 8 children. How many pencils?',       answer:'24', accepted:['24'] },
          { id:10, type:'input', text:'A row has 7 chairs. There are 5 rows. Total chairs?',            answer:'35', accepted:['35'] },
        ]}
      ]
    },
    {
      id: 2, studentClass: 'Class 5', topic: 'Fractions',
      difficulty: 'Intermediate', totalMarks: 11, timeMinutes: 40,
      sections: [
        { title: 'Section A — Fill in the blanks', questions: [
          { id:1, type:'input', text:'½ + ¼ = ?',                              answer:'3/4',  accepted:['3/4','¾'] },
          { id:2, type:'input', text:'¾ − ½ = ?',                              answer:'1/4',  accepted:['1/4','¼'] },
          { id:3, type:'input', text:'Equivalent fraction: 2/4 = ?/8',        answer:'4',    accepted:['4'] },
          { id:4, type:'input', text:'⅗ means __ parts out of 5',             answer:'3',    accepted:['3'] },
          { id:5, type:'input', text:'Simplify: 6/8 = ?',                      answer:'3/4',  accepted:['3/4','¾'] },
        ]},
        { title: 'Section B — Choose the correct answer', questions: [
          { id:6, type:'select',    text:'Which is greater?',   options:['⅔','¾','Equal'],   answer:'¾',    accepted:['¾','3/4'] },
          { id:7, type:'select',    text:'¼ + ¼ = ?',           options:['¼','½','¾','1'],   answer:'½',    accepted:['½','1/2','2/4'] },
          { id:8, type:'truefalse', text:'2/6 = 1/3',           options:['True','False'],    answer:'True', accepted:['true','True'] },
        ]},
        { title: 'Section C — Word problems', questions: [
          { id:9,  type:'input', text:'Riya ate ⅓ pizza, brother ate ¼. Together?',                    answer:'7/12', accepted:['7/12'] },
          { id:10, type:'input', text:'Ribbon is ¾ m, cut ¼ m off. How much left?',                    answer:'1/2',  accepted:['1/2','½','2/4'] },
          { id:11, type:'input', text:'20 students, ⅖ are girls. How many girls?',                     answer:'8',    accepted:['8'] },
        ]}
      ]
    },
    {
      id: 3, studentClass: 'Class 7', topic: 'Algebraic Expressions',
      difficulty: 'Advanced', totalMarks: 10, timeMinutes: 45,
      sections: [
        { title: 'Section A — Fill in the blanks', questions: [
          { id:1, type:'input', text:'If x = 3, find: 2x + 5 = ?',  answer:'11',  accepted:['11'] },
          { id:2, type:'input', text:'Simplify: 3a + 2a = ?',        answer:'5a',  accepted:['5a'] },
          { id:3, type:'input', text:'If y = 4, find: y² = ?',      answer:'16',  accepted:['16'] },
          { id:4, type:'input', text:'Simplify: 4b − b = ?',         answer:'3b',  accepted:['3b'] },
        ]},
        { title: 'Section B — Choose the correct answer', questions: [
          { id:5, type:'select',    text:'Which is a monomial?',    options:['2x+3','5xy','x+y+z','a-b'],  answer:'5xy',  accepted:['5xy'] },
          { id:6, type:'select',    text:'3x when x = 6?',         options:['9','12','18','24'],           answer:'18',   accepted:['18'] },
          { id:7, type:'truefalse', text:'2x + 3x = 5x²',          options:['True','False'],              answer:'False',accepted:['false','False'] },
        ]},
        { title: 'Section C — Application problems', questions: [
          { id:8,  type:'input', text:'Perimeter = 4s. If s = 7 cm, perimeter = ?',  answer:'28',  accepted:['28','28cm','28 cm'] },
          { id:9,  type:'input', text:'Cost of n pens = 5n. If n = 6, cost = ?',     answer:'30',  accepted:['30'] },
          { id:10, type:'input', text:'If a = 2, b = 3, find: a + 2b = ?',           answer:'8',   accepted:['8'] },
        ]}
      ]
    }
  ];

  getStudentById(id: number): StudentReport | undefined {
    return this.students.find(s => s.id === id);
  }

  getWorksheetById(id: number): Worksheet | undefined {
    return this.worksheets.find(w => w.id === id);
  }
}
