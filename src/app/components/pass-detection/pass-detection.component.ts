import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthService } from 'src/app/services/password-strength.service';

@Component({
  selector: 'app-pass-detection',
  templateUrl: './pass-detection.component.html',
  styleUrls: ['./pass-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassDetectionComponent implements OnChanges {
  @Input() pass: string | null | undefined;
  form: FormGroup;
  conclusion = { strength: 'nopass', message: 'Enter your password' };
  constructor(private passService: PasswordStrengthService) {}

  ngOnChanges(): void {
    if (typeof this.pass === 'string') this.conclusion = this.passService.getPasswordConclusion(this.pass);
  }
}
