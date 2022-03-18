import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../services/visits.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  title = 'Visites'
  visits: any[] = [];

  constructor( private visitsService: VisitsService ) { }

  ngOnInit(): void {
    this.getVisits();
  }

  getVisits() {
    this.visitsService.getVisits()
      .subscribe(response => {
        this.visits = response;
      });
  }

}
