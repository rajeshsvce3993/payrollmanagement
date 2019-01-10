import { Component, OnInit } from '@angular/core';
import { BenifitService } from './benifit.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-benifit',
  templateUrl: './benifit.component.html',
  styleUrls: ['./benifit.component.css']
})
export class BenifitComponent implements OnInit {

  hra: any;
  basic: any;
  pa: any;
  output: string;
  interestEsi: any;
  employerEsi: any;
  employeeEsi: any;
  employerPf: any;
  interestPf: any;
  employeePf: any;
  constructor(private benifitService: BenifitService,private router : Router) { }

  ngOnInit() {

this.onView();

  }


  onView(){

    this.benifitService.viewBenifits().subscribe((data : any)=>
    {


      this.employeePf=data.output[0].employeeContribution;
      this.employerPf=data.output[0].employerContribution;
      this.interestPf=data.output[0].interestContribution;
      this.employeeEsi=data.output[1].employeeContribution;
      this.employerEsi=data.output[1].employerContribution;
      this.interestEsi=data.output[1].interestContribution;
      this.hra=data.output[2].employerContribution;
      this.basic=data.output[3].employerContribution;
      this.pa=data.output[4].employerContribution;
      
      this.output="";


    });

  }


  onUpdate(employeePf,employerPf,interestPf,employeeEsi,employerEsi,interestEsi,hra,basic,pa)
  {

    this.benifitService.updateBenifit(employeePf,employerPf,interestPf,employeeEsi,employerEsi,interestEsi,hra,basic,pa).subscribe((data : any)=>
      {
     
        if(data.code==400)
        {
          this.output='Some thing went wrong';
        }
        else if(data.code==200 )
        {
          this.output='UPDATED SUCCESSFULLY';
        }
        else
        {
          
        }


});
  }
}