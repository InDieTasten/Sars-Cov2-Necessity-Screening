import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';


@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})

export class DemographicsComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  ngOnInit(): void {
  }

  public updateScore() {
    this.section.score = 0;
    if (this.section.age.value) {
      this.section.score += this.section.age.choices[this.section.age.value].riskValue;
    }
  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }

}
