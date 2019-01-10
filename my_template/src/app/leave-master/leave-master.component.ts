import { Component, OnInit } from '@angular/core';
import { LeaveMasterService } from './leave-master.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-master',
  templateUrl: './leave-master.component.html',
  styleUrls: ['./leave-master.component.css']
})
export class LeaveMasterComponent implements OnInit {

 
  output: string;
  earnLeave: any;
  sickLeave: any;
  casualLeave: any;
  weakLeave: any;
  constructor(private leaveMasterService: LeaveMasterService,private router : Router) { 


    this.onView();

  }

  ngOnInit() {
  }

  onView(){

    this.leaveMasterService.viewLeaves().subscribe((data : any)=>
    {


      this.weakLeave=data.output[0].weaklyOff;
      this.casualLeave=data.output[0].casualLeave;
      this.earnLeave=data.output[0].earnLeave;
      this.sickLeave=data.output[0].sickLeave;
      
      
      this.output="";


    });

  }


  onUpdate(weakLeave,casualLeave,earnLeave,sickLeave)
  {

    this.leaveMasterService.updateLeave(weakLeave,casualLeave,earnLeave,sickLeave).subscribe((data : any)=>
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
