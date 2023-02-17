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
    this.getDisciplines()
  }

  getDisciplines() {
    this.https.getDisciplines().subscribe((data: any) => {
      this.disciplines = data as Discipline[];
    });
  }

  deleteDisciplineById(id: number) {
    this.https.deleteDisciplineById(id).subscribe(res => {
      console.log(res)
      this.getDisciplines()
    })
  }
}
