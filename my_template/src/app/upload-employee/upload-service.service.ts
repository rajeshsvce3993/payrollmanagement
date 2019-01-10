import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadServiceService {

  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

uploadEmployee(employeeId,p,a,n)
{

  /*const frmData = new FormData();

  frmData.append("employeeId", employeeId);
  frmData.append("photo", p);
  frmData.append("aadhaar", a);
  frmData.append("pan", n);*/
  
  var data = {
    "employeeId":employeeId,
    "photo":p,
    "aadhaar":a,
    "pan":n,
    

  };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/uploademployee', data, { headers: reqHeader });
}
  
}



