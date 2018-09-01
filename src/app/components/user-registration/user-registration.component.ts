// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserRegistration } from '../../domains/user-registration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  disabledNickname: boolean = true;
  model: UserRegistration;

  constructor() { }

  ngOnInit() {
    this.model = new UserRegistration();
  }

  changeUseNickname(ev) {
    this.disabledNickname = !ev.target.checked;
    this.model.userNickname = '';
    // console.log(form.value);
  }

  signUp(form: FormControl) {
    if (form.valid) {
      console.log('is valid');
    } else {
      console.log('is not valid');
    }
    console.log(form.value);

    console.log('this.model');
    console.log(this.model);
  }

}
