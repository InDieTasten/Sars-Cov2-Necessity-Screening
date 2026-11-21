import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ScoreClass, scoreClasses } from 'src/scoreClasses';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ResultComponent implements OnInit {

  constructor() { }

  @Input()
  public score: number;

  public getCurrentScoreClass(): ScoreClass {
    for (let scoreClass of scoreClasses) {
      if (scoreClass.isActive(this.score)) {
        return scoreClass;
      }
    }
  }

  ngOnInit(): void {
  }

}
