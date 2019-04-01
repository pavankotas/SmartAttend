import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3000/api/login';
  constructor( private http: HttpClient) { }

  authenticate(user) {
   return this.http.post(`${this.uri}`, user);
  }
}
