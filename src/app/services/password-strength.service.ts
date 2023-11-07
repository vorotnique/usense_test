import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  regexValidation = [/[0-9]/, /[a-zA-Z]/, /[^A-Za-z0-9]/];
  validationResult = [false, false, false];
  validationStatus = 0; // number of passed validation conditions;
  conclusions = [
    { strength: 'nopass', message: 'Enter your password' },
    { strength: 'short', message: 'Password must contain at least 8 characters' },
    { strength: 'weak', message: 'Password is weak' },
    { strength: 'medium', message: 'Password is medium' },
    { strength: 'strong', message: 'Password is strong' },
  ];
  constructor() {}

  public getPasswordConclusion(passValue: string) {
    this.regexValidation.forEach((el, index) => {
      this.validationResult[index] = el.test(passValue);
    });
    this.validationStatus = this.validationResult.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue,
      0,
    );
    if (!passValue.length) {
      return this.conclusions[0];
    } else if (passValue.length < 8) {
      return this.conclusions[1];
    } else if (passValue.length >= 8 && this.validationStatus === 1) {
      return this.conclusions[2];
    } else if (passValue.length >= 8 && this.validationStatus === 2) {
      return this.conclusions[3];
    } else if (passValue.length >= 8 && this.validationStatus === 3) {
      return this.conclusions[4];
    }
    return this.conclusions[0];
  }
}
