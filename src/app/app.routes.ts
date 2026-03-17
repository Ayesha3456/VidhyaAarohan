import { Routes } from '@angular/router';
import { HomeComponent }           from './pages/home/home.component';
import { MathTuitionComponent }    from './pages/math-tuition/math-tuition.component';
import { TeachingMethodComponent } from './pages/teaching-method/teaching-method.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { AboutComponent }          from './pages/about/about.component';
import { ContactComponent }        from './pages/contact/contact.component';
import { ProgressReportsComponent } from './pages/progress-reports/progress-reports.component';
import { WorksheetsComponent }     from './pages/worksheets/worksheets.component';
import { LoginComponent }          from './pages/login/login.component';
import { DashboardComponent }      from './pages/dashboard/dashboard.component';
import { authGuard }               from './guards/auth.guard';

export const routes: Routes = [
  { path: '',                 component: HomeComponent },
  { path: 'math-tuition',     component: MathTuitionComponent },
  { path: 'teaching-method',  component: TeachingMethodComponent },
  { path: 'worksheets',       component: WorksheetsComponent },
  { path: 'web-development',  component: WebDevelopmentComponent },
  { path: 'about',            component: AboutComponent },
  { path: 'contact',          component: ContactComponent },
  { path: 'progress-reports', component: ProgressReportsComponent },
  { path: 'login',            component: LoginComponent },
  { path: 'dashboard',        component: DashboardComponent, canActivate: [authGuard] },
  { path: '**',               redirectTo: '' }
];
