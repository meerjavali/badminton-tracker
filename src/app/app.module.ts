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
import { ProfilePeerComponent } from './profile-peer/profile-peer.component';
import { Route, RouterModule } from '@angular/router';
import { LatestGameComponent } from './latest-game/latest-game.component';

const routes:Route[]=[
  {path:'',component:BadmintonPlayerComponent},
  {path:'meer_Vs_kv', component:ProfilePeerComponent},
  {path:'daily-Stats', component:DailyGameRecordComponent},
  {path:'updateGame',component:BadmintonFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BadmintonPlayerComponent,
    BadmintonFormComponent,
    DailyGameRecordComponent,
    ProfilePeerComponent,
    LatestGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
