import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = enviroment.api
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any>{

    const body = {
      email,
      password
    }

    return this.http.post(`${this.URL}/auth/login`, body)

  }
}
