import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterComponent } from './chapter/chapter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';

const routes: Routes = [  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'detail/:id', component: ChapterDetailsComponent},  
  { path: 'chapters', component: ChapterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
