import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVersionUI: String;
  loginVersionAPI: String;

  constructor() { }

  ngOnInit() {
    this.loginVersionAPI = '0.0.1-SNAPSHOT'; // Buscar da API
    this.loginVersionUI = require('package.json').version;
  }

}
