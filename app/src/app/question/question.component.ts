import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }
  @Input()
  public showQuestion: boolean;
  @Input()
  public question: Question;
  @Input()
  public name: string;
  ngOnInit(): void {
  }
  
  public getChoiceKeys(): any[] {
    return Object.keys(this.question.choices);
  }

}
