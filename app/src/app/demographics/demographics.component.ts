import { Component, OnInit, Input } from '@angular/core';


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

  public getQuestionKeys(): string[] {
    return Object.keys(this.section);
  }

}
