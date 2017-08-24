import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';
import { Report } from '../../models/report'


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  providers:[EncountersService],
  styles: []
})
export class EncountersComponent implements OnInit {

  public encounters: Report[];

  constructor(private encountersService: EncountersService) { }

  /**
   * Syntatic Sugar
   */
  async ngOnInit() {
    this.encounters = await this.encountersService.getEncounters(); 
  }


  // ngOnInit() {
  //   this.encountersService.getEncounters().then((response) => {
  //     console.log(response);
  //   });
  // }

}
