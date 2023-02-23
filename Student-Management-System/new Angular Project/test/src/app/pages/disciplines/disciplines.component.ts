import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { elementAt } from 'rxjs';
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
  router: any;

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
  disciplinesStudent: Discipline[] = [];

  getDisciplinesForStudent(studentId: number | any) {
    this.https.getStudentDisciplinesById(studentId).subscribe((data: any) => {
      this.disciplinesStudent = data as Discipline[];
    });
  }

  getAvailableDisciplines(): Discipline[] {
    return this.disciplines.filter(discipline => !this.disciplinesStudent.find(ds => ds.id === discipline.id));
  }

  confirmMap() {
    const confirmed = confirm('Are you sure you want to map this student to the selected discipline?');
    if (confirmed) {
      this.addStudentToDiscipline(this.studentIdToMap, this.disciplineIdToMap);
    } else {
      this.router.navigateByUrl('/disciplines/#disciplineMapForm');
    }
  }

  confirmAddDiscipline(): void {
    const confirmation = confirm("Are you sure you want to add a new discipline?");
    if (!confirmation) {
      this.router.navigateByUrl('/disciplines');
    }
  }

  confirmDeleteAllDisciplines(): void {
    const confirmation = confirm("Are you sure you want to delete all disciplines? This action cannot be undone.");
    if (confirmation) {
      this.deleteAllDisciplines();
    } else {
      this.router.navigateByUrl('/disciplines');
    }
  }

  confirmMapDiscipline(): void {
    const confirmation = confirm("Are you sure you want to map a discipline?");
    if (!confirmation) {
      this.router.navigateByUrl('/disciplines');
    }
  }

  confirmEdit(discipline: Discipline): void {
    const confirmation = confirm("Are you sure you want to edit this discipline?");
    if (confirmation) {
      this.editedDiscipline(discipline);
    } else {
      this.router.navigateByUrl('/disciplines');
    }
  }

  confirmDelete(disciplineId: number | any): void {
    const confirmation = confirm("Are you sure you want to delete this discipline? This action cannot be undone.");
    if (confirmation) {
      this.deleteDisciplineById(disciplineId);
    }
  }
}
