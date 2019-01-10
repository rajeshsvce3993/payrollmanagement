import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class LeaveMasterService {

  readonly rootUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }


viewLeaves()
  {
    


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/leaves',  { headers: reqHeader });
  }


  updateLeave(weakLeave,casualLeave,earnLeave,sickLeave)
{
  var data = {
    "weakLeave":weakLeave,
    "casualLeave":casualLeave,
    "earnLeave":earnLeave,
    "sickLeave":sickLeave,
     
  };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/updateleave', data, { headers: reqHeader });

}

}
