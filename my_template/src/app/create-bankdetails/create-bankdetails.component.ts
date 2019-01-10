import { Component, OnInit } from '@angular/core';
import { CreateBankdetailsService } from './create-bankdetails.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-bankdetails',
  templateUrl: './create-bankdetails.component.html',
  styleUrls: ['./create-bankdetails.component.css']
})
export class CreateBankdetailsComponent implements OnInit {


output:String;

  constructor(private createBankdetailsService: CreateBankdetailsService,private router : Router) { }

  ngOnInit() {
  }

  onSave(employeeId,accountName,accountNumber,ifscCode,bankName,branch,city)
  {

    this.createBankdetailsService.saveBankdetails(employeeId,accountName,accountNumber,ifscCode,bankName,branch,city).subscribe((data : any)=>
      {
     
        if(data.code==400)
        {
          this.output='Some thing went wrong';
        }
        else if(data.code==200 && data.result=="Not Success")
        {
          this.output='Bank Details already saved';
        }
        else
        {
          this.output="SAVED SUCCESSFULLY";

        }

        
   
      
      });
  

  }




}
