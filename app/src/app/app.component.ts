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

  handleClick(event: Event) {
    this.showResult = true;
  }
}
