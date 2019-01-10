import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  isUserLoggedIn=true;

  constructor() { }

  ngOnInit() {
  }

open(){

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

}

}
