import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IResponseAPI } from '../interfaces/IResponseAPI';
import { IUser } from '../interfaces/IUser.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private userSubject: BehaviorSubject<IUser>;
  get userData(): IUser {
    return this.userSubject.value;
  }

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('user')!)
    );
  }

  login(email: string, password: string): Observable<IResponseAPI> {
    return this.http
      .post<IResponseAPI>(
        `${this.baseUrl}/auth/Login`,
        { email, password },
        httpOptions
      )
      .pipe(
        map((res) => {
          console.log(res);
          if (res.httpStatusCode === 200) {
            const user: IUser = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
          }
          return res;
        })
      );
  }
}
