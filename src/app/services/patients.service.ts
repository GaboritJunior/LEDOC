import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient: HttpClient) { }

  getPatients(search = ''): Observable<any> {
    let url = 'http://localhost:3000/patients';
    return this.httpClient.get(url);
  }

  getPatient(id: string|null): Observable<any> {
    return this.httpClient.get('http://localhost:3000/patients/' + id);
  }

  addPatient(data: Patient) {
    return this.httpClient.post('http://localhost:3000/patients', data);
  }

  updatePatient(id: any, patient: Patient): Observable <any> {
    return this.httpClient.put('http://localhost:3000/patients/' + id, patient);
  }

  deleteClient(id: any): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/patients/' + id);
  }
}
