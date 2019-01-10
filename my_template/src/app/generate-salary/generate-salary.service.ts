import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class GenerateSalaryService {


  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  
  generateSalary(employeeId,amount,amountType)
  {
    var data = {
                "employeeId":employeeId,
                "amount":amount,
                "amountType":amountType,
                
               
              };


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/generatesalary', data, { headers: reqHeader });
  }


  saveSalary(employeeId,annualCtc,monthlyCtc,basic,hra,pa,pf,employeePf,employerPf,esi,employeeEsi,employerEsi,gross,netIncome)
  {
    var data = {
      "employeeId":employeeId,
      "annualCtc" : annualCtc,
				"monthlyCtc" : monthlyCtc,
				"employeePf" : employeePf,
				"employerPf" : employerPf,
				"employeeEsi" : employeeEsi,
				"employerEsi" : employerEsi,
				"gross" : gross,
				"netIncome" : netIncome,
				"pf" : pf,
				"esi" : esi,
				"hra":hra,
				"basic":basic,
				"pa":pa
				
      
      
     
    };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/savesalary', data, { headers: reqHeader });

  }



}
