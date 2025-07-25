import { inject, Injectable } from '@angular/core';
import { IUser } from '@/models/user.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/users';
  // private http = inject(HttpClient);
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
  getUsersById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`);
  }
  login(User: IUser): Observable<boolean> {
    return this.getUsersById(User.id).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      })
    );
  }
  addUser(User: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.url, User);
  }
  updateUser(id: string, User: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.url}/${id}`, User);
  }
  deleteUser(id: string): Observable<IUser> {
    return this.http.delete<IUser>(`${this.url}/${id}`);
  }
  generarNouId(): Observable<string> {
    return this.getUsers().pipe(
      map((Users) => {
        const nums = Users
          .map((u) => {
            const match = u.id?.match(/^user(\d+)$/); // comprova si l'id comença amb 'fmt' seguit de números
            return match ? parseInt(match[1], 10) : NaN;
          })
          .filter((n) => !isNaN(n)); // filtra només els vàlids

        const maxim = nums.length ? Math.max(...nums) : 0;
        const nouNum = maxim + 1;
        return 'fmt' + nouNum.toString().padStart(3, '0');
      })
    );
  }
}
