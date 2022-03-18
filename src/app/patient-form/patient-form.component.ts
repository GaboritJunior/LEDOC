import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  lastName = '';
  firstName = '';
  allergies = '';
  height = '';
  weight = '';
  bloodGroup = '';
  socialNumber = '';
  note = '';

  form: FormGroup;

  constructor(
    private patientService: PatientsService,
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data['edit']);
    this.initForm();
    if (this.route.snapshot.data['edit']) {
      this.getData();
    }
  }

  initForm() {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      allergies: [''],
      height: [''],
      weight: [0],
      bloodGroup: [0],
      socialNumber: [''],
      notes: [''],
    })
  }

  getData() {
    this.patientService
      .getPatient(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        this.form.patchValue(response);
      });
  }


  add() {
    this.patientService.addPatient(this.form.value).subscribe(response => {
      this.router.navigate(['/patients']);
    });
  }

  update() {
    this.patientService.updatePatient(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(response => {
      this.router.navigate(['/patients']);
    });
  }

  delete(){
    this.patientService.deleteClient(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.router.navigate(['/patients']);
    });
  }

  submit() {
    if (!this.route.snapshot.data['edit']) {
      this.add();
    } else {
      this.update();
    }
  }

}
