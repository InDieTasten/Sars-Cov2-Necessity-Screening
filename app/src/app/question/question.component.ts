import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';
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

  @Output()
  public change = new EventEmitter();
  
  ngOnInit(): void {
    smoothscroll.polyfill();
  }

  public scrollToView(element:HTMLElement){
    
    if(this.showQuestion){
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
