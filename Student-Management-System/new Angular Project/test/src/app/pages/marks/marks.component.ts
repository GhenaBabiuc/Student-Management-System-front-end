import { Component } from '@angular/core';
import { Discipline } from 'src/app/models/discipline.model';
import { Mark } from 'src/app/models/mark.model';
import { Student } from 'src/app/models/student.model';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { map, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-marks',
    templateUrl: './marks.component.html',
    styleUrls: ['./marks.component.css']
})
export class MarksComponent {
    students: Student[] = [];
    router: any;

    constructor(private https: HttpServiceService) {
        this.getStudents();
    }

    getStudents() {
        this.https.getStudents().subscribe((data: any) => {
            this.students = data as Student[];
        });
    }

    studentId: Number | null | undefined;
    disciplineId: Number | null | undefined;
    mark: Mark = new Mark();
    disciplines: Discipline[] = [];

    addMark(studentId: number | any, disciplineId: number | any, mark: any) {
        this.https.addMark(studentId, disciplineId, mark)
            .subscribe((res) => {
                console.log(res);
            });
    }

    getDisciplinesForStudent(studentId: number | any) {
        this.https.getStudentDisciplinesById(studentId).subscribe((data: any) => {
            this.disciplines = data as Discipline[];
        });
    }

    resetForm() {
        this.studentId = null;
        this.disciplineId = null;
        this.mark.mark = null;
    }

    confirmAddMark(studentId: number | any, disciplineId: number | any, mark: any) {
        const confirmation = confirm("are you sure?");
        if (confirmation) {
            this.addMark(studentId, disciplineId, mark);
            this.resetForm();
        }
    }

}
