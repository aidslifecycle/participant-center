import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FundraisingPageComponent } from './components/fundraising-page/fundraising-page.component';
import { FundraisingProgressComponent } from './components/fundraising-progress/fundraising-progress.component';
import { SendEmailComponent } from './components/send-email/send-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:project',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:project/:test',
    component: DashboardComponent
  },
  {
    path: 'progress',
    component: FundraisingProgressComponent
  },
  {
    path: 'send-email',
    component: SendEmailComponent
  },
  {
    path: 'fundraising-page',
    component: FundraisingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
