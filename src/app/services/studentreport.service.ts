import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StudentreportService {
  uri = 'https://smartattend.herokuapp.com/api/qrcode'

  constructor(private http: HttpClient) { }

  getReport(id) {
    // /${localStorage.getItem('userID')}
    return this.http.get(`${this.uri}/studentreport/${id}`);
  }

}
