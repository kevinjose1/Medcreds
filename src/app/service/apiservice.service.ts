import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseUrl: string = environment.url;
  constructor(private http: HttpClient) {}
  //Passing Data into Mock Api
  postData(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data).pipe(map((response: any) => response));
  }

}
