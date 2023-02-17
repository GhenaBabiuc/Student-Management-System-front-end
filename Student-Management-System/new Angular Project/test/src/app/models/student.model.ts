export class Student {
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  gender: String;

  constructor(id: number, firstName: String, lastName: String, email: String, gender: String) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
  }
}