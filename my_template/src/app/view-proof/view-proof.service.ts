import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ViewProofService {

  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  viewProof(employeeId)
  {
  
    var data = {
      "employeeId":employeeId
      
    };
  
  
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.rootUrl + '/viewproof', data, { headers: reqHeader });
  }
  

}
