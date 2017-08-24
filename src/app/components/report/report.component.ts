import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { NewReport } from '../../models/report';
import { EncountersService } from '../../services/encounters';
import { Alien } from '../../models/alien';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  providers:[
    AlienService,
    EncountersService
  ],
  styles: []
})
export class ReportComponent implements OnInit {

  aliens: Alien[];

  saveReport = new FormGroup({
    alien_id: new FormControl('', 
      [
        Validators.required,
      ]),
    action_taken: new FormControl('', 
      [
        Validators.required,
      ])
  });
  constructor(
    private alienService: AlienService,
    private encounterService: EncountersService,
  ) { }
  
/**
 * Syntatic Sugar
 */
  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
    console.log(this.aliens);
  }

  async postEncounter() {
    const encounter: NewReport = {
      atype: this.saveReport.get('alien_id').value,
      date: Date.now().toString(),
      action: this.saveReport.get('action_taken').value,
      colonist_id: 5, // 
    };

    const colonist = await this.encounterService.postEncounter(encounter);
    console.log('Report was saved!', encounter);
  }; 

  // ngOnInit() {
  //   this.alienService.getAliens().then((response) => {
  //     console.log(response);
  //   });
  // }

}
