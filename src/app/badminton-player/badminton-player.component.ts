import { Component } from '@angular/core';

@Component({
  selector: 'app-badminton-player',
  templateUrl: './badminton-player.component.html',
  styleUrls: ['./badminton-player.component.css']
})
export class BadmintonPlayerComponent {
  flag=true;
  dailyStats=true;
  peer=true;
  onClick(){
    this.flag=false;
  }
  dailyStat(){
    this.dailyStats = false;
  }
  peerStats(){
    this.peer=false;
  }

}
