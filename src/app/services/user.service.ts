import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Configuration } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = Configuration.apiUrl;


  constructor(private httpClient: HttpClient) { }

  signup(data:any): Observable<any>{
    return this.httpClient.post(this.url+
      "/user/signup", data, httpOptions)
  }

  forgotPassword(data:any): Observable<any>{
    return this.httpClient.post(this.url+
      "/user/forgotPassword", data, httpOptions)
  }

  handleError(error:Error, errorvalue:any){
    console.log(error);
    return of(errorvalue)
  }

  login(data:any):Observable<any>{
    return this.httpClient.post(this.url+
      "/user/login", data, httpOptions)
  }
}
