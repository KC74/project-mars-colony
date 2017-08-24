import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';
import { Job } from '../../models/job';
import { NewColonist } from '../../models/colonist';

import { 
  FormControl, 
  FormGroup,
  Validators,
  ValidatorFn,
  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [
    JobService,
    ColonistService,
  ],
  styles: [``]
})
export class RegisterComponent implements OnInit {

  private nameRegex = /[0-9]/;
  public jobs: Job[];

  registerForm = new FormGroup({
    name: new FormControl('', 
      [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2),
        this.isValidName(this.nameRegex),
      ]),
    age: new FormControl('', 
      [
        Validators.required,
        Validators.max(150000),
        Validators.min(0)
      ]),
    job_id: new FormControl('', 
      [
        Validators.required,
      ])
  });
    
  /**
   * Default Constructor
   * 
   * @param colonistService 
   * @param jobService 
   */
  constructor(
    private colonistService: ColonistService,
    private jobService: JobService
  ) {  }

  /**
   * Syntatic Sugar
   * -----------------------------------
   * - async is not supported by all browsers, must use typescript to make it so.
   * -----------------------------------
   */
  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  };

  async registerColonist() {
    const newColonist: NewColonist = {
      name: this.registerForm.get('name').value,
      age: this.registerForm.get('age').value,
      job_id: this.registerForm.get('job_id').value
    };

    const colonist = await this.colonistService.registerColonist(newColonist);
    console.log('colonist was saved!', colonist);
  };

  private isValidName(validNameRegex): ValidatorFn {
    return (control): {[key: string] : any } => {
      const forbiddenName = validNameRegex.test(control.value);
      return forbiddenName ? { 'forbiddenName' : { value: control.value } } : null;
    }
  }
}


