import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from './upload-service.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-employee',
  templateUrl: './upload-employee.component.html',
  styleUrls: ['./upload-employee.component.css']
})
export class UploadEmployeeComponent implements OnInit {

  
  photo: any;
  aadhaar: any;
  pan: any;

p:String;
n:String;
a:String;
output:String;

  constructor(private uploadServiceService: UploadServiceService,private router : Router) { }

  ngOnInit() {
  }

  
  readPhoto(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.photo = event.target.result;

        
      }
  


      reader.readAsDataURL(event.target.files[0]);
    }
  }



  readAadhaar(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.aadhaar = event.target.result;


      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
    
  }

  readPan(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.pan = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  
     
  

  onUpload(employeeId)
  {

this.p=this.photo;
this.a=this.aadhaar;
this.n=this.pan;

    this.uploadServiceService.uploadEmployee(employeeId,this.p,this.a,this.n).subscribe((data : any)=>
      {

        if(data.code==400)
        {
          this.output='SOME THING WENT WRONG';
        }
        else if(data.code==201)
        {
          this.output='DOCUMENT ALREADY UPLOAD';
        }
        else if(data.code==200)
        {
          this.output="UPLOAD SUCCESSFULLY";
        }
        else
        {
          this.output='EMPLOYEE ID NOT FOUND';
        }


      
      });
  

  }


}
