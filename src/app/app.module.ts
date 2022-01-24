import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import {CheckboxModule} from 'primeng/checkbox';

import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextareaModule } from "primeng/inputtextarea";
import { RadioButtonModule } from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    RadioButtonModule,
    TableModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [RegFormComponent]
})
export class AppModule { }
