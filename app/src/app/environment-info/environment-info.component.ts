import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-environment-info',
  templateUrl: './environment-info.component.html',
  styleUrls: ['./environment-info.component.scss']
})
export class EnvironmentInfoComponent implements OnInit {

  constructor() { }

  @Input()
  public section: any;

  ngOnInit(): void {

  }

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }
}
