import { Component, OnInit } from '@angular/core';
import { ViewEmployeeService } from './view-employee.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeNumber:String;
  firstName:String;
  lastName:String;
  designation:String;
  dob:String;
  email:String;
  mobile:String;
  pNo:String;
  pName:String;
  pStreet:String;
  pNationality:String;
  pState:String;
  pCity:String;
  pPin:String;
  tNo:String;
  tName:String;
  tStreet:String;
  tNationality:String;
  tState:String;
  tCity:String;
  tPin:String;
  output:String;



  public show:boolean = false;
  

  
  
  constructor(private viewEmployeeService: ViewEmployeeService,private router : Router) {

    

   }

  ngOnInit() {
  }



onView(employeeId)
{
  this.viewEmployeeService.viewEmployee(employeeId).subscribe((data : any)=>
  {
    if(data.result=='Success')
    {
    this.employeeNumber=data.output[0].employeeNumber;
    this.firstName=data.output[0].firstName;
    this.lastName=data.output[0].lastName;
    this.designation=data.output[0].designation;
    this.dob=data.output[0].dateOfBirth;
    this.email=data.output[0].emailId;
    this.mobile=data.output[0].mobileNumber;
    this.pNo=data.output[0].permanentNo;
    this.pName=data.output[0].permanentName;
    this.pStreet=data.output[0].permanentStreet;
    this.pNationality=data.output[0].permanentNationality;
    this.pState=data.output[0].permanentState;
    this.pCity=data.output[0].permanentCity;
    this.pPin=data.output[0].permanentPin;
    this.tNo=data.output[0].currentNo;
    this.tName=data.output[0].currentName;
    this.tStreet=data.output[0].currentStreet;
    this.tNationality=data.output[0].currentNationality;
    this.tState=data.output[0].currentState;
    this.tCity=data.output[0].currentCity;
    this.tPin=data.output[0].currentPin;
    this.output='';

    this.show=true;
    }
    else
    {

      this.output='Employee Id Not Found';
      this.show=false;

    }
    
  });
}

onUpdate(employeeNumber,firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin)
  {

    this.viewEmployeeService.updateEmployee(employeeNumber,firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin).subscribe((data : any)=>
      {
     
//console.log(data);

        if(data.code == 200)
        {
         
        this.output='SUCCESSFULLY UPDATED';

        }
        else
        {

         
        }
   
      
      });
    }


}
