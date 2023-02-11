import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  url = Configuration.apiUrl;

  constructor(private httpClient: HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url +
      "/theme/add", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
      })
  }

  update(data:any){
    return this.httpClient.post(this.url +
      "/theme/update", data, {
        headers: new HttpHeaders().set('Content-Type', "application/json")
      })
  }

  getThemes(){
    return this.httpClient.get(this.url+"/theme/get");
  }
}
