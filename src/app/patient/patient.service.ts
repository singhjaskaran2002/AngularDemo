import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { }

  getUserData() {
    console.log("getUserData called");
    return this.http.get<any>('http://localhost:8080/listUsers');
  }

  deleteUserData(id) {
    return this.http.post('http://localhost:8080/deleteUser', {id:id});
  }
}
