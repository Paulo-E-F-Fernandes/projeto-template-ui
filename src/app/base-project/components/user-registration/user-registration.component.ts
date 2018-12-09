// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initModel();
    this.createForm();
  }

  initModel() {
    this.model = new UserRegistration();
  }

  createForm() {
    this.userForm = this.fb.group({
      'userName': [this.model.userName, [Validators.required]],
      'userUseNickname': [this.model.userUseNickname, []],
      'userNickname': [{value: this.model.userNickname, disabled: true}, []],
      'userEmail': [this.model.userEmail, Validators.compose([Validators.required, Validators.email])],
      'userPassword': [this.model.userPassword, []],
      'userConfirmPassword': [this.model.userConfirmPassword, [Validators.required]]
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
