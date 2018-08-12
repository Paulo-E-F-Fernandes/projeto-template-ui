// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageLogo: string = '/assets/img/logo.png';
  pageName: string = 'Page-Name';
  
  constructor() { }

  ngOnInit() {
  }

}
