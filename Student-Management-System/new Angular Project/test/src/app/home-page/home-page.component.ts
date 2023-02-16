import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { Discipline } from './discipline.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  students: Student[] = [];
  disciplines: Discipline[] = [];

  constructor(private http: HttpClient) {

    this.http.get<Student[]>('http://localhost:8080/students').subscribe({
      next: (data: Student[]) => {
        this.students = data;
      },
      error: (error) => {
        console.log('Error', error);
      },
    });

    this.http.get<Discipline[]>('http://localhost:8080/disciplines').subscribe({
      next: (data: Discipline[]) => {
        this.disciplines = data;
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }

  deleteStudent(student: Student): void {
    this.http.delete(`http://localhost:8080/students/delete/${student.id}`).subscribe({
      next: () => {
        const index = this.students.indexOf(student);
        if (index !== -1) {
          this.students.splice(index, 1);
        }
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }

}
