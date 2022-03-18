import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dictionarie } from '../models/dictionarie';
import { Patient } from '../models/patient';
import { DictionariesService } from '../services/dictionaries.service';
import { PatientsService } from '../services/patients.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientNotes = [];
  patient: any = {};
  form: FormGroup;

  drugs: Dictionarie[];
  repeats: Dictionarie[];
  periods: Dictionarie[];
  bloodgroups: Dictionarie[];
  genders: Dictionarie[];


  constructor(
    private patientsService: PatientsService,
    private dictionariesService: DictionariesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getDicoData();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      drugs:[1],
      repeats:[1],
      periods:[1]
    })
  }

  getDicoData() {

    this.dictionariesService.getDictionaries('drugs')
      .subscribe(response => {
        this.drugs = response;
      });

    this.dictionariesService.getDictionaries('repeats')
      .subscribe(response => {
        this.repeats = response;
      });

    this.dictionariesService.getDictionaries('periods')
      .subscribe(response => {
        this.periods = response;
      });

    this.dictionariesService.getDictionaries('bloodgroups')
      .subscribe(response => {
        this.bloodgroups = response;
      });

    this.dictionariesService.getDictionaries('gender')
      .subscribe(response => {
        this.genders = response;
      });
  }

  getData() {
    this.patientsService
      .getPatient(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        this.patient = response;
      });
  }


  submit() {
    this.patient.treatments.push(this.form.value);
    this.patientsService.updatePatient(this.route.snapshot.paramMap.get('id'), this.patient).subscribe(response => {
      this.patient = response;
    });
  }

  deleteTreatment(id: number) {
    this.patient.treatments.splice(id, 1);
    this.patientsService.updatePatient(this.route.snapshot.paramMap.get('id'), this.patient).subscribe(response => {
      this.patient = response;
    });
  }

  getGender() {
    return this.genders.find(gender => gender.id === this.patient.gender)?.label;
  }

  getBloodGroup() {
    return this.bloodgroups.find(bloodgroup => bloodgroup.id === this.patient.bloodGroup)?.label;
  }

  getDrug(id: number) {
    return this.drugs.find(drug => drug.id === id)?.label;
  }

  getRepeat(id: number) {
    return this.repeats.find(repeat => repeat.id === id)?.label;
  }

  getPeriod(id: number) {
    return this.periods.find(period => period.id === id)?.label;
  }

}
