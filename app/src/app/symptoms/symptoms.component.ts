import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '../question';

@Component({
    selector: 'app-symptoms',
    templateUrl: './symptoms.component.html',
    styleUrls: ['./symptoms.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SymptomsComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  @Input()
  public showFirstQuestion:boolean;

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
