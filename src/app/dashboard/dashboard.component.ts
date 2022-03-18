import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { StatsService } from '../services/stats.service';
import { MeetsService } from '../services/meets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public statsService: StatsService,
    public patientsService: PatientsService,
    public meetsService: MeetsService
    ) { }

  stats: any = {};
  patients: any = {};
  meets: any = {};

  ngOnInit(): void {
    this.getStats();
    this.getPatients();
    this.getMeets();
  }

  getStats(period = 'day'){
    this.statsService.getStats(period).subscribe(response => {
      this.stats = response;
    });
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
      .slice(0,4);
    })
  }

  getMeets(){
    this.meetsService.getMeets().subscribe(response => {
      this.meets = response.slice(0,3);
    })
  }

}
