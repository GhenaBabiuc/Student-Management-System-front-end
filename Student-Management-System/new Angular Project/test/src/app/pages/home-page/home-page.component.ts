import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  deleteStudentById(id: Number | null) {
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

  updateStudent(student: Student) {
    this.https.updateStudent(student.id, student).subscribe(res => {
      console.log(res);
      this.getStudents();
    })
  }

  addedStudent: Student = new Student();
  editeStudent: Student = new Student();

  add() {
    this.addStudent(this.addedStudent);
    this.addedStudent = new Student();
  }

  editedStudent(student: Student) {
    this.editeStudent = student;
  }

  editStudent() {
    this.updateStudent(this.editeStudent)
  }

  deleteAllStudents() {
    this.https.deleteAllStudents().subscribe(res => {
      console.log(res);
      this.getStudents();
    })
  }

  marksStudent: Student = new Student();

  getDisciplinesWithMarksById(id: any) {
    this.https.getDisciplinesWithMarksById(id).subscribe((data: any) => {
      this.marksStudent = data as Student;
    })
  }

}
