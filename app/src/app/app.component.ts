import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { choice } from './choice';
import { questionaire } from 'src/questionaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //public form: FormGroup;
  public questionaire = questionaire;
  public showResult:boolean = false;

  getLastDemographicsStatus():boolean{
    let keys = Object.keys(this.questionaire.demographics);
    return this.questionaire.demographics[keys[keys.length - 1]].value;
  }
  getLastSymptonsStatus():boolean{
    let keys = Object.keys(this.questionaire.symptoms);
    return this.questionaire.symptoms[keys[keys.length - 1]].value;
  }
  getLastPreconditionStatus():boolean{
    let keys = Object.keys(this.questionaire.preconditions);
    return this.questionaire.preconditions[keys[keys.length - 1]].value;
  }

  getLastEnviromentInfoStatus():boolean{
    let keys = Object.keys(this.questionaire.environmentInfo);
    return this.questionaire.environmentInfo[keys[keys.length - 1]].value;
  }

  handleClick(event: Event) {
    this.showResult = true;
  }
}
