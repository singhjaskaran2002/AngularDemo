import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  user: [];
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>('http://localhost:8080/listUsers');
  }

  delete(id) {
    return this.http.delete<any>('http://localhost:8080/deleteUser/'+id);
  }

  add(obj) {
    return this.http.post<any>('http://localhost:8080/addUser',obj);
  }
}
