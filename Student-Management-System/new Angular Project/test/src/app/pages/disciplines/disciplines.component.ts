import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Discipline } from 'src/app/models/discipline.model';
import { Student } from 'src/app/models/student.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent {
  disciplines: Discipline[] = [];
  students: Student[] = [];
  p: Number = 1;

  constructor(private https: HttpServiceService) {
    this.getDisciplines();
    this.getStudents();
  }

  getDisciplines() {
    this.https.getDisciplines().subscribe((data: any) => {
      this.disciplines = data as Discipline[];
    });
  }

  getStudents() {
    this.https.getStudents().subscribe((data: any) => {
      this.students = data as Student[];
    });
  }

  deleteDisciplineById(id: Number | null) {
    this.https.deleteDisciplineById(id).subscribe(res => {
      console.log(res);
      this.getDisciplines();
    })
  }

  updateDiscipline(discipline: Discipline) {
    this.https.updateDiscipline(discipline.id, discipline).subscribe(res => {
      console.log(res);
      this.getDisciplines()
    })
  }

  addDiscipline(addedDiscipline: Discipline) {
    this.https.addDiscipline(addedDiscipline).subscribe(res => {
      console.log(res);
      this.getDisciplines();
    })
  }

  addedDiscipline: Discipline = new Discipline();
  editeDiscipline: Discipline = new Discipline();

  add() {
    this.addDiscipline(this.addedDiscipline);
    this.addedDiscipline = new Discipline();
  }


  editedDiscipline(discipline: Discipline) {
    this.editeDiscipline = discipline;
  }

  editDiscipline() {
    this.updateDiscipline(this.editeDiscipline)
  }

  deleteAllDisciplines() {
    this.https.deleteAllDisciplines().subscribe(res => {
      console.log(res);
      this.getDisciplines();
    })
  }

  addStudentToDiscipline(sId: Number | any, dId: Number | any) {
    this.https.addStudentToDiscipline(sId, dId).subscribe(res => {
      console.log(res);
    })
  }

  studentIdToMap: Number | undefined;
  disciplineIdToMap: Number | undefined;
}
