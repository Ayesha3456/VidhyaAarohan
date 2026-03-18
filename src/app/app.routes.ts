import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MathTuitionComponent } from './pages/math-tuition/math-tuition.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'math-tuition', component: MathTuitionComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

// Scroll restoration options
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // forces page to top on navigation
  anchorScrolling: 'enabled',       // optional: allows scrolling to anchors
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}