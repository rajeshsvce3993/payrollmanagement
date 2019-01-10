import { Component, OnInit } from '@angular/core';
import { ViewProofService } from './view-proof.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Serializable } from 'selenium-webdriver';


@Component({
  selector: 'app-view-proof',
  templateUrl: './view-proof.component.html',
  styleUrls: ['./view-proof.component.css']
})
export class ViewProofComponent implements OnInit {

photo:String;
aadhaar:String;
pan:String;
output:String;
public show:boolean = false;

  constructor(private viewProofService: ViewProofService,private router : Router) { }

  ngOnInit() {
  }

  onView(employeeId)
  {
    this.viewProofService.viewProof(employeeId).subscribe((data : any)=>
    {

      if(data.code==400)
      {
        this.output="SOMETHING WENT WRONG";
        this.photo='';
        this.aadhaar='';
        this.pan='';
        this.show=false;
      }
      else if(data.code==201)
      {
        this.output='EMPLOYEE ID NOT FOUND';
        this.photo='';
        this.aadhaar='';
        this.pan='';
        this.show=false;
      }
      else if(data.code==202)
      {
        this.output='DOCUMENT NOT UPLOAD';
        this.photo='';
        this.aadhaar='';
        this.pan='';
        this.show=false;
      }
      else
      {

        this.photo=data.photo;
        this.aadhaar=data.aadhaar;
        this.pan=data.pan;
        this.output="";

        this.show=true;


      }
      
    });
  }


}
