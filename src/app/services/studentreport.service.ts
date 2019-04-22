import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StudentreportService {
  uri = 'http://localhost:3000/api/qrcode'

  constructor(private http: HttpClient) { }

  getReport() {
    return this.http.get(`${this.uri}/report`);
  }

}
