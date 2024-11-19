import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadmintonPlayerComponent } from './badminton-player/badminton-player.component';
import { BadmintonFormComponent } from './badminton-form/badminton-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DailyGameRecordComponent } from './daily-game-record/daily-game-record.component';


@NgModule({
  declarations: [
    AppComponent,
    BadmintonPlayerComponent,
    BadmintonFormComponent,
    DailyGameRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
