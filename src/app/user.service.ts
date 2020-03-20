import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseurl: string = "http://localhost:61984/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  list(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  constructor(private http: HttpClient) {
  
   }
}
