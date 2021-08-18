import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoothComponent } from '../components/booth.component';
import { ResultComponent } from '../components/result.component';
import { VotingCardComponent } from '../components/votingCard.component';
import { FormComponent } from '../components/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    BoothComponent,
    VotingCardComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
