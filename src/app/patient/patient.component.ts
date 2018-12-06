import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from '../modal/modal.component';
import { PatientService } from './patient.service';

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	token: boolean = false;
	modalRef: BsModalRef;
	data: [];

	constructor(
		private modalService: BsModalService,
		private patientService: PatientService
	) { }

	AddUser(template: TemplateRef<any>) {
		this.token = false;
		this.modalRef = this.modalService.show(template);
	}

	deleteUser(id) {
		console.log(id)
		this.patientService.deleteUserData(id).subscribe(data=>{
			// console.log(data.status);
			if(data.status) {
				this.getUsers();
			}
		});
	}

	editClicked(template: TemplateRef<any>) {
		this.token = true;
		this.modalRef = this.modalService.show(template);
	}

	getUsers() {
		this.patientService.getUserData().subscribe(res => {
			console.log(res.users)
			this.data = res.users;
		});
	}

	ngOnInit() {
		console.log("in hook");
		this.getUsers();
	}
}
