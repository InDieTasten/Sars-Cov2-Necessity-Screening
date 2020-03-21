import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { choice } from './choice';
import { questionaire } from 'src/questionaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //public form: FormGroup;
  public questionaire = questionaire;
  public showResult:boolean = false;

  handleClick(event: Event) {
    this.showResult = true;
  }
}
