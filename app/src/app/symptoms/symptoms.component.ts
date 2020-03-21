import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  ngOnInit(): void {
  }

  public updateScore() {
    this.section.score = 0;
    for (let name of Object.keys(this.section)) {
      let question = this.section[name] as Question;
      if (question.type == 'choice' && question.value) {
        this.section.score += question.choices[question.value].riskValue;
      }
    }
  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }
}
