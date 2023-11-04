import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'usense-test';
  message = 'Enter your password';
  form: FormGroup;
  regexValidation = [/.{8,}/, /[0-9]/, /[a-zA-Z]/, /[^A-Za-z0-9]/];
  validationResult = [false, false, false, false];
  validationStatus = 0 // number of passed validation conditions;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', Validators.required],
    });
  }

  handlePasswordChange() {
    // By the way, the whole logic could be easily replaced with angular-password-strength-meter package
    this.regexValidation.forEach((el, index) => {
      this.validationResult[index] = el.test(this.form.value.password);
    })
    this.validationStatus = this.validationResult.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue,
      0,
      )
    if (this.validationStatus === 0) {
      this.message = 'Enter your password';
    } else if (!this.validationResult[0]) {
      this.message = 'Password must contain at least 8 characters';
    } else if (this.validationResult[0] && this.validationStatus === 2) {
      this.message = 'Password is weak';
    } else if (this.validationResult[0] && this.validationStatus === 3) {
      this.message = 'Password is medium';
    } else if (this.validationResult[0] && this.validationStatus === 4) {
      this.message = 'Password is strong';
    }
  }
}
