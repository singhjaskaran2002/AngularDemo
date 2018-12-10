import { PatientService } from './../patient/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, TemplateRef, Input, EventEmitter, Output, OnInit } from '@angular/core';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  obj: any = {};
  public form: FormGroup;
  EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  @Input() updatePass: boolean;
  @Input() isEdit: boolean;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: BsModalService,
    private patientComponent: PatientComponent,
    private patientService: PatientService,
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.EMAIL_REGEX)])],
      password: ['', Validators.required],
      city: ['', Validators.required]
    })

    this.obj = { id: '', name: '', email: '', password: '', city: '' };
  }

  ngOnInit() {
    console.log('isEdit: ', this.isEdit);
    if(this.isEdit) {
      this.obj = this.patientComponent.selectedUser;
    }
    // if(this.updatePass) {
    //   this.obj = this.patientComponent.
    // }
    console.log()
  }

  closeModal() {
    this.patientComponent.modalRef.hide();
  }

  addUser() {
    if (this.form.valid) {
      console.log('=>', this.obj);
      this.obj.id = new Date().getTime();
      this.patientService.add(this.obj).subscribe(res => {
        console.log(res);
        this.callBack.emit();
      });
      this.patientComponent.modalRef.hide();
    } else {
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsTouched({ onlySelf: true });
      });
    }
  }

}
