import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    return this.http.delete<any>('http://localhost:8080/deleteUser/'+id);
  }

  addUserData() {
    return this.http.post<any>('http://localhost:8080/listUsers')
  }
}
