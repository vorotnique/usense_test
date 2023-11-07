import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PassInputComponent } from './components/pass-input/pass-input.component';
import { PassDetectionComponent } from './components/pass-detection/pass-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    PassInputComponent,
    PassDetectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
