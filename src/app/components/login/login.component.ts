// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Application
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
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginVersionAPI = '0.0.1-SNAPSHOT'; // Buscar da API
    this.loginVersionUI = require('package.json').version;

    this.login = new Login();
    this.loginForm = new FormGroup({
      'loginEmail': new FormControl(this.login.accountUser, [
        Validators.required, 
        Validators.email
      ]),
      'loginPassword': new FormControl(this.login.accountPassword, [Validators.required]),
      'loginRemember': new FormControl(this.login.accountRemember, [])
    });
  }

  signIn() {
    console.log('sign in');
    console.log('this.userForm.value');
    console.warn(this.loginForm.value);
  }

}
