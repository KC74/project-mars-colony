import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';
import { Report } from '../../models/report'


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  providers:[EncountersService],
  styles: [``]
})
export class EncountersComponent implements OnInit {

  public encounters: Report[];

  constructor(private encountersService: EncountersService) { 

      // this.encounters = this.encounters || localStorage.getItem('encounters')
  }

  /**
   * -------------------------
   * Syntatic Sugar
   * -------------------------
   * 
   *  Insert reason why here.
   * 
   * -------------------------
   * ngOnInit() {
   *    this.encountersService.getEncounters().then((response) => {
   *    console.log(response);
   *   });
   * }
   * -------------------------
   */
  async ngOnInit() {
    this.encounters = await this.encountersService.getEncounters(); 
  }
}
