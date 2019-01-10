import { Component, OnInit } from '@angular/core';
import { ViewBankdetailsService } from './view-bankdetails.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-bankdetails',
  templateUrl: './view-bankdetails.component.html',
  styleUrls: ['./view-bankdetails.component.css']
})
export class ViewBankdetailsComponent implements OnInit {

output:String;
  public show:boolean = false;

employeeId:String;
accountName:String;
accountNumber:String;
ifscCode:string;
bankName:String;
branch:String;
city:String;


  constructor(private viewBankdetailsService: ViewBankdetailsService,private router : Router) { }

  ngOnInit() {
  }



  onView(employeeId)
  {
    this.viewBankdetailsService.viewBankdetails(employeeId).subscribe((data : any)=>
    {
      if(data.code==400)
      {
        this.output='Something Went Wrong';
        this.show=false;
      }
      else if(data.result=='Success')
      {
          this.employeeId=data.output[0].employeeId;
          this.accountName=data.output[0].accountName;
          this.accountNumber=data.output[0].accountNumber;
          this.ifscCode=data.output[0].ifscCode;
          this.bankName=data.output[0].bankName;
          this.branch=data.output[0].branch;
          this.city=data.output[0].city;
          
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


  onUpdate(employeeId,accountName,accountNumber,ifscCode,bankName,branch,city)
  {

    this.viewBankdetailsService.updateEmployee(employeeId,accountName,accountNumber,ifscCode,bankName,branch,city).subscribe((data : any)=>
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
