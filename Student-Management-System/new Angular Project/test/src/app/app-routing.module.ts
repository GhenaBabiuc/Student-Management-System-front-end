import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { StudentsComponent } from './pages/students/students.component';
import { MarksComponent } from './pages/marks/marks.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'marks', component: MarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
