import { User } from './../models/user.model'; // Ensure User is used in the code
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

   // Mock POST/PUT/DELETE (since JSONPlaceholder won't save changes)
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  updateUser(userId:number,user: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${userId}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
