import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-pass-input',
  templateUrl: './pass-input.component.html',
  styleUrls: ['./pass-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassInputComponent implements ControlValueAccessor {
  value: string | undefined;
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(@Self() private readonly ngControl: NgControl, private readonly changeDetector: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
  }

  handlePasswordChange(event: Event): void {
    const passInputElement = event.target as HTMLInputElement;
    const value = passInputElement.value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
