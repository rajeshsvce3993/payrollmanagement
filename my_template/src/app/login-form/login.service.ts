import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';

@Injectable()

export class LoginService {

  //http: ;
  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  loginAuthentication(userName,password) {
    var data = {"userName":userName,"password":password};


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/login', data, { headers: reqHeader });
  }

 /* getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }*/

}
