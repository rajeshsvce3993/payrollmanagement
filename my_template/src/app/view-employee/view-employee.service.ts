import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable()
export class ViewEmployeeService {


  

  
  readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


viewEmployee(employeeId)
{

  var data = {
    "employeeId":employeeId
    
  };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/viewemployee', data, { headers: reqHeader });
}


updateEmployee(employeeNumber,firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin)
{

  var data = {
                "employeeNumber":employeeNumber,
                "firstName":firstName,
                "lastName":lastName,
                "designation":designation,
                "dob":dob,
                "email":email,
                "mobile":mobile,
                "permanentNo":pNo,
                "permanentName":pName,
                "permanentStreet":pStreet,
                "permanentNationality":pNationality,
                "permanentState":pState,
                "permanentCity":pCity,
                "permanentPin":pPin,
                "currentNo":tNo,
                "currentName":tName,
                "currentStreet":tStreet,
                "currentNationality":tNationality,
                "currentState":tState,
                "currentCity":tCity,
                "currentPin":tPin
    
  };


var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(this.rootUrl + '/updateemployee', data, { headers: reqHeader });
}



}


