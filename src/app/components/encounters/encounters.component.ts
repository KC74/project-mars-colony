import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';
import { Report } from '../../models/report'


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  providers:[EncountersService],
  styles: [`
  * { box-sizing: border-box ;}
  .container { height: 100%; width: 100%; }
  .encounters-title { 10vh }
  .main-body { width: 100%; height: 60vh; overflow: scroll; }
  `]
})
export class EncountersComponent implements OnInit {

  public encounters: Report[];

  constructor(private encountersService: EncountersService) { }

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
