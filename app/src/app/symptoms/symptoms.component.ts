import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  @Input()
  public showFirstQuestion:boolean;

  ngOnInit(): void {
  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }
}
