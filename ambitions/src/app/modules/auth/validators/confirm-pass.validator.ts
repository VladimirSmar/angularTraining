import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static confirmPasswordValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.get(source);
      const confirmPass = control.get(target);

      return pass && confirmPass && pass.value !== confirmPass.value
        ? { mismatch: true }
        : null;
    };
  }
}
