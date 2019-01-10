import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

logout(){

  localStorage.removeItem('userToken');
this.router.navigate(['']);
}

}
