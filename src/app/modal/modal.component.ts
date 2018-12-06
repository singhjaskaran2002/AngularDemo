import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PatientComponent } from '../patient/patient.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  flag: boolean;

  constructor(
    private modalService: BsModalService,
    private patientComponent: PatientComponent
  ) {
    this.flag = this.patientComponent.token;
  }

  closeModal() {
    this.patientComponent.modalRef.hide();
  }

}
