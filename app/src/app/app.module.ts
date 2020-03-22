import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { PreconditionsComponent } from './preconditions/preconditions.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { EnvironmentInfoComponent } from './environment-info/environment-info.component';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    DemographicsComponent,
    PreconditionsComponent,
    SymptomsComponent,
    EnvironmentInfoComponent,
    ResultComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
