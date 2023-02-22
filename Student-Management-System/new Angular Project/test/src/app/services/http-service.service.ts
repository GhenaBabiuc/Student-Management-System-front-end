import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discipline } from '../models/discipline.model';
import { Mark } from '../models/mark.model';
import { Student } from '../models/student.model';

const SERVER_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(SERVER_URL + '/students')
  }

  getStudentById(id: any) {
    return this.http.get(SERVER_URL + '/students/' + id)
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(SERVER_URL + '/students/add', student);
  }

  updateStudent(id: any, student: Student): Observable<Student> {
    return this.http.put<Student>(SERVER_URL + '/students/update/' + id, student);
  }

  deleteStudentById(id: any) {
    return this.http.delete(SERVER_URL + '/students/delete/' + id)
  }

  deleteAllStudents() {
    return this.http.delete(SERVER_URL + '/students/delete');
  }

  getDisciplinesWithMarksById(id: any) {
    return this.http.get<Student>(SERVER_URL + "/students/disciplines-with-marks/" + id);
  }

  getStudentDisciplinesById(id: any) {
    return this.http.get<Discipline[]>(SERVER_URL + "/students/disciplines/" + id);
  }

  addMark(studentId: any, disciplineId: any, mark: Mark) {
    const params = new HttpParams()
      .set('studentId', studentId.toString())
      .set('disciplineId', disciplineId.toString());
    return this.http.post(SERVER_URL + '/students/add-mark', mark, { params });
  }

  addStudentToDiscipline(studentId: any, disciplineId: any) {
    const params = new HttpParams()
      .set('studentId', studentId.toString())
      .set('disciplineId', disciplineId.toString());
    return this.http.post(SERVER_URL + '/students/map-discipline', {}, { params });
  }

  getDisciplines() {
    return this.http.get(SERVER_URL + '/disciplines');
  }

  addDiscipline(discipline: Discipline) {
    return this.http.post(SERVER_URL + '/disciplines/add', discipline);
  }

  updateDiscipline(id: any, discipline: Discipline) {
    return this.http.put<Discipline>(SERVER_URL + '/disciplines/update/' + id, discipline);
  }

  deleteDisciplineById(id: any) {
    return this.http.delete<string>(SERVER_URL + '/disciplines/delete/' + id);
  }

  deleteAllDisciplines() {
    return this.http.delete<string>(SERVER_URL + '/disciplines/delete');
  }
}
