import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { choice } from './choice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public form: FormGroup;

  public preexistingconditions: Array<choice> = [
    {description: 'Krebs', value: 'Krebs'},
    {description: "Bluthochdruck", value: 'Bluthochdruck'},
  ];

  public constructor(
    private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      age: [""],
      name: [""],
      zip: [""],
      phone: [""],
      healthcare: [""],
      preexistingconditions: new FormArray([])
    });

    this.setFormData();
  }

  public onSubmit(): void {
      if (this.form.valid) {
          
      }
  }

  onCheckChange(event) {
    const formArray: FormArray = this.form.get('preexistingconditions') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }
  private setFormData(): void {

    // this.form = this.fb.group({
    //     id: [this.tagModel.id],
    //     name: [this.tagModel.name, [Validators.required, Validators.maxLength(20), NoWhitespaceValidator]],
    //     tagGroup: [this.tagModel.tagGroupId],
    //     activeFrom: [this.tagModel.activeFrom, Validators.required],
    //     activeUntil: [this.tagModel.activeUntil],
    //     imageURL: [this.tagModel.tagImageURL]
    // });

    // this.form.valueChanges.subscribe(tagForm => {
    //     if (this.tagModel !== undefined) {
    //         this.setTagModel(tagForm);
    //         this.minDateActiveUntil = tagForm.activeFrom;
    //         const now = new Date();
    //         if (now > this.minDateActiveUntil) {
    //             this.minDateActiveUntil = now;
    //         }
    //     }
    // });

  }
}
