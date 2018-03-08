import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './modules/registration/registration.component';
import { FocusModule } from './modules/focus/focus.module';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
