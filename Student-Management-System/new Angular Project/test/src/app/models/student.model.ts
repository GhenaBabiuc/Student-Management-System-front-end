import { Discipline } from "./discipline.model";

export class Student {
  id: Number | null;
  firstName: String | null;
  lastName: String | null;
  email: String | null;
  gender: String | null;
  disciplines: Discipline[] = [];

  constructor(
    id?: Number,
    firstName?: String,
    lastName?: String,
    email?: String,
    gender?: String,
    disciplines?: Discipline[]
  ) {
    this.id = id || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.email = email || null;
    this.gender = gender || null;

    if (disciplines) {
      this.disciplines = disciplines;
    }
  }
}
