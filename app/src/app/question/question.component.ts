import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input()
  public firstQuestion:boolean = false;

  @Output()
  public change = new EventEmitter();
  
  ngOnInit(): void {
  }

  public scrollToView(element:HTMLElement){
    if(this.showQuestion && !this.firstQuestion){
         element.scrollIntoView({
           behavior:"smooth",
           block:"center"
         })
    }
 
  }

  public emitChange() {
    this.change.emit();
  }
  
  public getChoiceKeys(): any[] {
    return Object.keys(this.question.choices);
  }

}
