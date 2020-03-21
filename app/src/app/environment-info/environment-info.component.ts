import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-environment-info',
  templateUrl: './environment-info.component.html',
  styleUrls: ['./environment-info.component.scss']
})
export class EnvironmentInfoComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  @Output()
  public change = new EventEmitter();
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
    this.change.emit();
  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }
}
