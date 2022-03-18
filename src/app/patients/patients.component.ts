import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(
    public patientsService: PatientsService,
  ) { }

  patients: any = {};

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.patientsService.getPatients().subscribe(response => {
      this.patients = response
      .sort(
        function (a: any, b:any){
          let dateA = new Date(a.lastIncome);
          let dateB = new Date(b.lastIncome);
          return dateA.getTime() - dateB.getTime();
        }
      )
    })
  }

}
