import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  constructor(private httpClient: HttpClient) { }

  getVisits(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/visits');
  }

  /*getVisits(period: string): Observable<any> {
    return this.httpClient.get('http://localhost:3000/visits/individual' + period);
  }*/
}
