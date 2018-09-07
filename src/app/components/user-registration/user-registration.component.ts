// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Application
import { UserRegistration } from '../../domains/user-registration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  private model: UserRegistration;
  public disabledNickname: boolean = true;
  public userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.model = new UserRegistration();
    this.userForm = new FormGroup({
      'userName': new FormControl(this.model.userName, [Validators.required]),
      'userUseNickname': new FormControl(this.model.userUseNickname, []),
      'userNickname': new FormControl({value: this.model.userNickname, disabled: true}, []),
      'userEmail': new FormControl(this.model.userEmail, [
        Validators.required,
        Validators.email
      ]),
      'userPassword': new FormControl(this.model.userPassword, []),
      'userConfirmPassword': new FormControl(this.model.userConfirmPassword, [Validators.required])
    });

  }

  changeUseNickname(ev) {
    // Reseta o valor do campo
    this.userForm.controls.userNickname.reset();
    this.disabledNickname = !ev.target.checked;

    if (ev.target.checked) {
      this.userForm.controls.userNickname.enable();
    } else {
      this.userForm.controls.userNickname.disable();
    }
  }

  signUp() {
    console.log('this.model');
    console.warn(this.model);
    console.log('this.userForm.value');
    console.warn(this.userForm.value);
  }

}
