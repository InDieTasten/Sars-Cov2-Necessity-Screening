import { Component, OnInit } from '@angular/core';
import { questionaire } from 'src/questionaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.updateTotalScore();
  }
  public questionaire: any = questionaire;
  public showResult: boolean = false;

  public updateTotalScore() {
    let predispositionScore = this.questionaire.demographics.score || 0 + this.questionaire.preconditions.score || 0;
    let symptomsScore = this.questionaire.symptoms.score || 0 * 3 ^ (1+(this.questionaire.demographics.age.value || 0/100));
    this.questionaire.score = (symptomsScore + predispositionScore) / 2;
  }

  getLastDemographicsStatus():boolean{
    let keys = Object.keys(this.questionaire.demographics);
    return this.questionaire.demographics[keys[keys.length - 2]].value;
  }
  getLastSymptonsStatus():boolean{
    let keys = Object.keys(this.questionaire.symptoms);
    return this.questionaire.symptoms[keys[keys.length - 2]].value;
  }
  getLastPreconditionStatus():boolean{
    let keys = Object.keys(this.questionaire.preconditions);
    return this.questionaire.preconditions[keys[keys.length - 2]].value;
  }

  getLastEnviromentInfoStatus():boolean{
    let keys = Object.keys(this.questionaire.environmentInfo);
    return this.questionaire.environmentInfo[keys[keys.length - 2]].value;
  }

  handleClick(event: Event) {
    this.showResult = true;
  }
}
