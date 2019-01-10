import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable()
export class BenifitService {


  readonly rootUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }


viewBenifits()
  {
    


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/benifit',  { headers: reqHeader });
  }

  updateBenifit(employeePf,employerPf,interestPf,employeeEsi,employerEsi,interestEsi,hra,basic,pa)
  {
    var data = {
                "employeePf":employeePf,
                "employerPf":employerPf,
                "interestPf":interestPf,
                "employeeEsi":employeeEsi,
                "employerEsi":employerEsi,
                "interestEsi":interestEsi,
                "hra":hra,
                "basic":basic,
                "pa":pa,
                          
              };


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/updatebenifit', data, { headers: reqHeader });
  }
}
