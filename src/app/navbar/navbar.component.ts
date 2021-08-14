import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public rtr : Router) { }

  ngOnInit(): void {
  }

  LogoutUser(){
    localStorage.clear();
    this.rtr.navigate(["login"]);
   
  }
  isLoggedIn(){
    return localStorage.getItem("uname");
  }

}
