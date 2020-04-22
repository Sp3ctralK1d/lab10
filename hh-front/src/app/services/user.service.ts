import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "http://localhost:8000/api"

  private httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    console.log(user)
    return this.http.post<User>(`${this._url}/login/`, user, this.httpHeaders)
  }
}
