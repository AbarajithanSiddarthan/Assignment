import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(public https:HttpClient) {

   }

  createStudent(data: any) {
    return this.https.post('https://crudcrud.com/api/b7f3ce336843430587a6118db378ba1b/student', data)
  }

  deleteStudent(data: any) {
    return this.https.delete(`https://crudcrud.com/api/b7f3ce336843430587a6118db378ba1b/student/${data._id}`)
  }

  updateStudent(id: any,student: any) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.https.put(`https://crudcrud.com/api/b7f3ce336843430587a6118db378ba1b/student/${id}`, student,httpOptions)
  }

  getDetails(){
    return this.https.get('https://crudcrud.com/api/b7f3ce336843430587a6118db378ba1b/student')
  }
}
