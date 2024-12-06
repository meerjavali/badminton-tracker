import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badminton-player',
  templateUrl: './badminton-player.component.html',
  styleUrls: ['./badminton-player.component.css']
})
export class BadmintonPlayerComponent {
 
  constructor(private route:Router){}
  updateGame(){
    this.route.navigate(["/updateGame"]);
  }
  dailyStat(){
    this.route.navigate(["/daily-Stats"]);
  }
  peerStats(){
    this.route.navigate(["/meer_Vs_kv"]);
  }

}
