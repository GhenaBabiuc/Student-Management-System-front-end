import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = [];
  page: Number = 1;
  pages: Number = 1;
  router: any;

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
      this.getStudents();
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

  confirmDelete(): void {
    const confirmation = confirm("Are you sure you want to delete all students? This action cannot be undone.");
    if (confirmation) {
      this.deleteAllStudents();
    }
  }

  confirmAddStudent(): void {
    if (!this.addedStudent.firstName || !this.addedStudent.lastName || !this.addedStudent.email || !this.addedStudent.gender) {
      alert('Please fill all required fields');
      this.router.navigateByUrl('/students/#studentAddForm');
      return;
    } else {
      const confirmation = confirm("Are you sure you want to add a new student?");
      if (confirmation) {
        this.add();
      } else {
        this.addedStudent = new Student();
        this.router.navigateByUrl('/students/#studentAddForm');
      }
    }
  }

  confirmEditStudent() {
    const confirmation = confirm(`Are you sure you want to edit the student?`);
    if (confirmation) {
      this.editStudent();
    } else {
      this.getStudents();
      this.router.navigateByUrl('/students/#studentAddForm');
    }
  }

  confirmDeleteStudent(student: Student): void {
    const confirmation = confirm(`Are you sure you want to delete the student ${student.firstName} ${student.lastName}? This action cannot be undone.`);
    if (confirmation) {
      this.deleteStudentById(student.id);
    }
  }

}
