import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class CreateEmployeeService {

  readonly rootUrl = 'http://localhost:3000';

 

  constructor(private http: HttpClient) { }


  createEmployee(firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin)
  {
    var data = {
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
    return this.http.post(this.rootUrl + '/createemployee', data, { headers: reqHeader });
  }

}
