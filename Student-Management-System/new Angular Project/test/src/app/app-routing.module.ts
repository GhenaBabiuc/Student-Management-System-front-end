import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarksComponent } from './pages/marks/marks.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'marks', component: MarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
