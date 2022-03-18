import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  constructor(private httpClient: HttpClient) { }

  //drugs, repeats, periods, bloodgroups, gender
  getDictionaries(type: String): Observable<any> {
    return this.httpClient.get('http://localhost:3000/dictionaries/' + type);
  }
}
