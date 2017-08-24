import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  providers:[EncountersService],
  styles: []
})
export class EncountersComponent implements OnInit {

  constructor(private encountersService: EncountersService) { }

  /**
   * Syntatic Sugar
   */
  async ngOnInit() {

  }

  // ngOnInit() {
  //   this.encountersService.getEncounters().then((response) => {
  //     console.log(response);
  //   });
  // }

}
