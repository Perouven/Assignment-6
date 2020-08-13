/*********************************************************************************
*  WEB422 – Assignment 05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Perouven Vencadachellum   Student ID:120960182  Date:12 August 2020
*  Online link: https://musing-lumiere-6a9e45.netlify.app
*
********************************************************************************/ 
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    // Extra Challenge
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });

  }
}
