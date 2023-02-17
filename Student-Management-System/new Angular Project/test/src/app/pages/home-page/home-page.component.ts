import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  students: Student[] = [];

  constructor(private https: HttpServiceService) {
    this.getStudents()
  }

  getStudents() {
    this.https.getStudents().subscribe((data: any) => {
      this.students = data as Student[];
    });
  }

  deleteStudentById(id: number) {
    this.https.deleteStudentById(id).subscribe(res => {
      console.log(res)
      this.getStudents()
    })
  }

  addStudent(newStudent: Student) {
    this.https.addStudent(newStudent).subscribe(res => {
      console.log(res);
      this.getStudents();
    });
  }


  addedStudent: Student = new Student(0, '', '', '', '');
  showAddForm = false;

  showForm() {
    this.showAddForm = true;
  }

  add() {
    this.showAddForm = false;
    this.addStudent(this.addedStudent);
  }
}
