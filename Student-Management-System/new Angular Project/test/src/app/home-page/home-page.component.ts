import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  disciplines = [{
    "name": "Mathematics"
  }, {
    "name": "Computer Science"
  }, {
    "name": "English"
  }, {
    "name": "Biology"
  }
  ]

  students = [{
    "firstName": "Ghenadie",
    "lastName": "Babiuc",
    "email": "babiuc.ghenadii@gmail.com",
    "gender": "Male",
    "dateOfBirth": "07/05/2002"
  }, {
    "firstName": "Ilon",
    "lastName": "Musk",
    "email": "Ilon.musk@gmail.com",
    "gender": "Male",
    "dateOfBirth": "11/05/1984"
  }, {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@gmail.com",
    "gender": "Male",
    "dateOfBirth": "01/02/1980"
  },
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@gmail.com",
    "gender": "Female",
    "dateOfBirth": "05/06/1982"
  },
  {
    "firstName": "Bob",
    "lastName": "Smith",
    "email": "bob.smith@gmail.com",
    "gender": "Male",
    "dateOfBirth": "03/12/1985"
  },
  {
    "firstName": "Emily",
    "lastName": "Johnson",
    "email": "emily.johnson@gmail.com",
    "gender": "Female",
    "dateOfBirth": "07/08/1988"
  },
  {
    "firstName": "Michael",
    "lastName": "Williams",
    "email": "michael.williams@gmail.com",
    "gender": "Male",
    "dateOfBirth": "12/09/1990"
  }]
}

