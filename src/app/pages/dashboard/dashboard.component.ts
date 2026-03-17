import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StudentDataService, StudentReport, Worksheet, WorksheetQuestion } from '../../services/student-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeTab: 'reports' | 'worksheets' = 'reports';
  selectedReport!: StudentReport;
  selectedWorksheet!: Worksheet;
  submitted = false;
  score = 0;

  constructor(
    public auth: AuthService,
    public data: StudentDataService
  ) {}

  ngOnInit(): void {
    this.selectedReport    = this.data.students[0];
    this.selectedWorksheet = this.data.worksheets[0];
  }

  /* ── Reports ─────────────────────────────── */
  selectStudent(s: StudentReport): void {
    this.selectedReport = s;
  }

  getAttendancePct(): number {
    return Math.round((this.selectedReport.sessionsAttended / this.selectedReport.totalSessions) * 100);
  }
  getHomeworkPct(): number {
    return Math.round((this.selectedReport.homeworkSubmitted / this.selectedReport.totalHomework) * 100);
  }
  getAvgQuiz(): number {
    const t = this.selectedReport.topics;
    return Math.round(t.reduce((s, x) => s + (x.quiz / x.maxQuiz) * 100, 0) / t.length);
  }
  getBarWidth(quiz: number, maxQuiz: number): number {
    return Math.round((quiz / maxQuiz) * 100);
  }
  getBarColor(level: string): string {
    const m: Record<string,string> = { 'Excellent':'#1D9E75','Good':'#378ADD','Average':'#EF9F27','Needs Work':'#E24B4A' };
    return m[level] ?? '#94a3b8';
  }
  getLevelClass(level: string): string {
    const m: Record<string,string> = { 'Excellent':'level-exc','Good':'level-good','Average':'level-avg','Needs Work':'level-need' };
    return m[level] ?? '';
  }
  getGradeColor(grade: string): string {
    if (grade.startsWith('A')) return '#1D9E75';
    if (grade.startsWith('B')) return '#378ADD';
    if (grade.startsWith('C')) return '#EF9F27';
    return '#E24B4A';
  }

  downloadReport(): void {
    const title = `Progress_Report_${this.selectedReport.studentName.replace(/ /g,'_')}_${this.selectedReport.month.replace(/ /g,'_')}`;
    document.title = title;
    window.print();
    document.title = 'AMR Digital Academy';
  }

  /* ── Worksheets ──────────────────────────── */
  selectWorksheet(ws: Worksheet): void {
    this.selectedWorksheet = ws;
    this.resetWorksheet();
  }

  getAllQuestions(): WorksheetQuestion[] {
    return this.selectedWorksheet.sections.flatMap(s => s.questions);
  }

  checkAnswers(): void {
    let correct = 0;
    this.getAllQuestions().forEach(q => {
      const ua = (q.userAnswer ?? '').trim().toLowerCase();
      const ok = q.accepted.some(a => a.toLowerCase() === ua);
      q.status = ua === '' ? '' : ok ? 'correct' : 'wrong';
      if (ok) correct++;
    });
    this.score = correct;
    this.submitted = true;
  }

  resetWorksheet(): void {
    this.submitted = false;
    this.score = 0;
    this.getAllQuestions().forEach(q => { q.userAnswer = ''; q.status = ''; });
  }

  getScorePct(): number {
    return Math.round((this.score / this.selectedWorksheet.totalMarks) * 100);
  }

  getResultClass(): string {
    const p = this.getScorePct();
    if (p >= 80) return 'result-pass';
    if (p >= 50) return 'result-avg';
    return 'result-fail';
  }

  getResultMsg(): string {
    const p = this.getScorePct();
    const s = this.score, t = this.selectedWorksheet.totalMarks;
    if (p >= 80) return `Excellent! ${s}/${t} correct. Outstanding work — keep it up!`;
    if (p >= 50) return `Good effort! ${s}/${t} correct. Review the wrong answers.`;
    return `Keep practising! ${s}/${t} correct. Go through the topic again.`;
  }

  getDiffClass(d: string): string {
    return { 'Beginner':'diff-begin','Intermediate':'diff-inter','Advanced':'diff-adv' }[d] ?? '';
  }

  downloadWorksheet(): void {
    const title = `Worksheet_${this.selectedWorksheet.studentClass}_${this.selectedWorksheet.topic}`.replace(/ /g,'_');
    document.title = title;
    window.print();
    document.title = 'AMR Digital Academy';
  }
}
