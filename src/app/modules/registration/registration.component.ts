import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

const EMAIL_REGEX = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
const PASSWORD_REGEX = /(?=.*\d)(?=.*[A-Z])(?=.*\W)/


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private regGroup: FormGroup;
  private hidden = true;
  private focus_password = false;
  private focus_email = false;
  private email = '';

  constructor(formBuilder: FormBuilder,) { 
    this.regGroup = formBuilder.group({
      'email' :     [{value: '', disabled: false}, Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(EMAIL_REGEX)])],
      'password' :   [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.pattern(PASSWORD_REGEX)])]
    })
  }

  ngOnInit() {
    console.log(this.regGroup);
  }

  registration(){
    let data = {'email': this.email};
    console.log(Object.assign(data, this.regGroup.value));
  }

  emailEnter(param) {
    if(param){
      this.hidden = false;
      this.email = this.regGroup.controls.email.value;
      this.regGroup.controls.email.disable();
      this.focus_email = false;
      this.focus_password = true;
    }
  }
  emailChange() {
    if(this.regGroup.controls.email.disabled){
      this.regGroup.controls.email.enable();
      this.regGroup.controls.password.setValue('');
      this.focus_password = false;
      this.hidden = true;
      this.focus_email = true;
    }
  }
  

}
