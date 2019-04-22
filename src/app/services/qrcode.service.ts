import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  uri = 'http://localhost:3000/api/qrcode';

  constructor(private http: HttpClient) {
  }

  addQRCode(qrcode) {
    return this.http.post(`${this.uri}/add`, qrcode);
  }

  checkin(attendance) {
    return this.http.post(`${this.uri}/checkin`, attendance);
  }

  getReport() {
    return this.http.get(`${this.uri}/report`);
  }

}
