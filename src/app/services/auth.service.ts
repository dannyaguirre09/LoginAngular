import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { LoginResponse } from '../models/login-response'
import { Login } from '../models/login'
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs'; 
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable()
export class AuthService {
  SERVER: string = 'http://34.123.99.236:8080';
  authSubject = new BehaviorSubject(false);
  private token: string;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.checkToken();
   }

   get isLogged():Observable<boolean> {
     return this.loggedIn.asObservable();
   }

  login(user: Login): Observable<LoginResponse> {
    var ruta = `${this.SERVER}/oauth/token`;   
    const httpOptions = {
      headers: new HttpHeaders({        
        'Authorization': 'Basic ' + btoa('parking_frontend:Edison_We_Connect_2021'),
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };

    const body = new HttpParams()
    .set('username', user.username)
    .set('password', user.password)
    .set('grant_type', 'password');
    
    return this.httpClient.post<LoginResponse>(ruta, body, httpOptions)
          .pipe(tap(
            (res: LoginResponse) => {
              if(res) {                
                this.saveToken(res.access_token, user.username);
                this.loggedIn.next(true);
                return res;
              }
            }
          )) ;
  }

  logout():void { 
    this.token = '';
    localStorage.removeItem('access_token');
    localStorage.removeItem('correo');
    this.loggedIn.next(false);
  }

  private saveToken(token: string, correo:string):void {
    localStorage.setItem('access_token', token);
    localStorage.setItem('correo', correo);
    this.token = token;
  }

  private checkToken() {
    const userToken = localStorage.getItem('access_token');
    const isExpired = helper.isTokenExpired(userToken);
    isExpired ? this.logout(): this.loggedIn.next(true);    
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem('access_token');
    }
    return this.token;
  }

}
