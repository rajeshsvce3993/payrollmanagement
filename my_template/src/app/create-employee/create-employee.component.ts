import { Component, OnInit } from '@angular/core';
import { CreateEmployeeService } from './create-employee.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  output : String;
  empId : String;
  emp : String;

  

  constructor(private createEmployeeService: CreateEmployeeService,private router : Router) { }

  ngOnInit() {
  }


  onCreate(firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin)
  {

    this.createEmployeeService.createEmployee(firstName,lastName,designation,dob,email,mobile,pNo,pName,pStreet,pNationality,pState,pCity,pPin,tNo,tName,tStreet,tNationality,tState,tCity,tPin).subscribe((data : any)=>
      {
     
//console.log(data);

        if(data.code == 200)
        {
         this.output="EMPLOYEE CREATED SUCCESSFULLY";
        this.empId=data.employeeId;
        this.emp="Employee Id :"
          //this.router.navigate(['/createEmployee']);
        }
        else
        {

          this.output="SOME THING WENT WRONG";        
         // this.router.navigate(['/createEmployee']);
        }
   
      
      });
  

  }

}
