import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preconditions',
  templateUrl: './preconditions.component.html',
  styleUrls: ['./preconditions.component.scss']
})
export class PreconditionsComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  ngOnInit(): void {
  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }
}
