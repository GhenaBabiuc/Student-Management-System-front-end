import { Component } from '@angular/core';
import { Discipline } from 'src/app/models/discipline.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent {
  disciplines: Discipline[] = [];

  constructor(private https: HttpServiceService) {
    this.getDisciplines();
  }

  getDisciplines() {
    this.https.getDisciplines().subscribe((data: any) => {
      this.disciplines = data as Discipline[];
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

  editeDiscipline: Discipline = new Discipline();

  editedDiscipline(discipline: Discipline) {
    this.editeDiscipline = discipline;
  }

  editDiscipline() {
    this.updateDiscipline(this.editeDiscipline)
  }
}
