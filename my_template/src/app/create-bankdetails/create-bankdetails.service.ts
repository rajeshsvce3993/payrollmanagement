import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class CreateBankdetailsService {

  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  saveBankdetails(employeeId,accountName,accountNumber,ifscCode,bankName,branch,city)
  {
    var data = {
                "employeeId":employeeId,
                "accountName":accountName,
                "accountNumber":accountName,
                "ifscCode":ifscCode,
                "bankName":bankName,
                "branch":branch,
                "city":city
               
              };


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/savebank', data, { headers: reqHeader });
  }



}
