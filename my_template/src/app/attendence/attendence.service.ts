import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AttendenceService {


  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  uploadattendence(attendence)
  {
    var data = {
      "attendence":attendence,
      
     
    };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/readattendence', data, { headers: reqHeader });
}

  }



