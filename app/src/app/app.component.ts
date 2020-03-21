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
  //public form: FormGroup;
  public questionaire: any = questionaire;

  public updateTotalScore() {
    let predispositionScore = this.questionaire.demographics.score || 0 + this.questionaire.preconditions.score || 0;
    let symptomsScore = this.questionaire.symptoms.score || 0 * 10.891089;
    this.questionaire.score = (symptomsScore + predispositionScore) / 2;
  }
}
