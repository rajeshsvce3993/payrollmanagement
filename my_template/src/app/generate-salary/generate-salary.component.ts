import { Component, OnInit } from '@angular/core';
import { GenerateSalaryService } from './generate-salary.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Serializable } from 'selenium-webdriver';

@Component({
  selector: 'app-generate-salary',
  templateUrl: './generate-salary.component.html',
  styleUrls: ['./generate-salary.component.css']
})
export class GenerateSalaryComponent implements OnInit {

  pa: number;
  basic: number;
  hra: number;
  monthlyCtc: number;
  employeePf: number;
  employerPf: number;
  employeeEsi: number;
  employerEsi: number;
  pf: number;
  esi: number;
  gross: number;
  netIncome: number;
  annualCtc: number;
ctc:String;
public show:boolean = false;
public view:boolean = false;
amountType:String;
amount:String;
employeeId:String;


output:String;

  constructor(private generateSalaryService: GenerateSalaryService,private router : Router) { }

  ngOnInit() {
  }



onShow(employeeId,amount,amountType)
  {

    this.generateSalaryService.generateSalary(employeeId,amount,amountType).subscribe((data : any)=>
      {
        if(data.code == 200)
        {
          this.annualCtc=Math.round(data.annualCtc);
          this.monthlyCtc=Math.round(data.monthlyCtc);
          this.employeePf=Math.round(data.employeePf);
          this.employerPf=Math.round(data.employerPf);
          this.employeeEsi=Math.round(data.employeeEsi);
          this.employerEsi=Math.round(data.employerEsi);
          this.pf=Math.round(data.pf);
          this.esi=Math.round(data.esi);
          this.gross=Math.round(data.gross);
          this.netIncome=Math.round(data.netIncome);
          this.hra=Math.round(data.hra);
          this.basic=Math.round(data.basic);
          this.pa=Math.round(data.pa);
          this.output='';
          this.employeeId=data.employeeId;
          this.show=true;
          

        }
        else
        {
          this.output='SOMETHING WENT WRONG';

          this.show=false;
        }
     
       

        
   
      
      });
    }
  
      onSubmit(employeeId,annualCtc,monthlyCtc,basic,hra,pa,pf,employeePf,employerPf,esi,employeeEsi,employerEsi,gross,netIncome)
      {
    
        this.generateSalaryService.saveSalary(employeeId,annualCtc,monthlyCtc,basic,hra,pa,pf,employeePf,employerPf,esi,employeeEsi,employerEsi,gross,netIncome).subscribe((data : any)=>
          {
            if(data.code == 200)
            {
              this.output='SAVED SUCCESSFULLY';
            }
            else
            {
              this.output='SOMETHING WENT WRONG';
            }
            
         
           
    
            
       
          
          });
      


  }

}


