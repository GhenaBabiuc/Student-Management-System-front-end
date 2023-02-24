import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './pages/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { MarksComponent } from './pages/marks/marks.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DisciplinesComponent,
    MarksComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
