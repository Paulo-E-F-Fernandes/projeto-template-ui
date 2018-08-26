// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Login } from '../../domains/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVersionUI: String;
  loginVersionAPI: String;

  login: Login;

  constructor() { }

  ngOnInit() {
    this.loginVersionAPI = '0.0.1-SNAPSHOT'; // Buscar da API
    this.loginVersionUI = require('package.json').version;
  }

  signIn(form: FormControl) {
    console.log('sign in');
    console.log(form.value);
  }

}
