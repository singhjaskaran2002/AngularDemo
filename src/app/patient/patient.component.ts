import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { ModalComponent } from '../modal/modal.component';
import { PatientService } from './patient.service';

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	modalRef: BsModalRef;
	data: [];
	flag = false;
	updatePass = false;
	selectedUser: {};

	constructor(
		private modalService: BsModalService,
		private patientService: PatientService
	) { }

	ngOnInit() {
		this.getUsers();
	}

	added() {
		this.getUsers();
	}

	AddUser(template: TemplateRef<any>) {
		this.flag = false;
		this.modalRef = this.modalService.show(template);
	}

	deleteUser(id) {
		this.patientService.delete(id).subscribe(data => {
			if (data.status) {
				this.getUsers();
			}
		});
	}

	updatePassword(template: TemplateRef<any>, data) {
		this.updatePass = true;
		this.modalRef = this.modalService.show(template);
		this.selectedUser = data;

	}

	editClicked(template: TemplateRef<any>, data) {
		this.flag = true;
		this.modalRef = this.modalService.show(template);
		this.selectedUser = data;
	}

	getUsers() {
		this.patientService.get().subscribe(res => {
			console.log(res.users)
			this.data = res.users;
		});
	}
}
