import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.css']
          })
export class LoginFormComponent implements OnInit
 {

  
  isUserLoggedIn: boolean;
    isLoginError: boolean = false;

    
    
    constructor(private loginService : LoginService,private router : Router)
    {

    }

    ngOnInit()
    {
      this.isUserLoggedIn=true;
    }


    onSubmit(userName,password)
    {



      this.loginService.loginAuthentication(userName,password).subscribe((data : any)=>
      {
     
//console.log(data);

        if(data.code == 200 && data.success=='login sucessfull')
        {

          localStorage.setItem('userToken',data.token);
         
          this.router.navigate(['/dashboard']);
        }
        else
        {

          this.isLoginError = true;          
          this.router.navigate(['']);
        }
   
      
      });
  
    
    }
  }
