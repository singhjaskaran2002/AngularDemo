import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { PatientComponent } from './patient/patient.component';
import { PatientService } from './patient/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
