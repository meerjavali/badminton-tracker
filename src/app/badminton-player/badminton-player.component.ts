import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-badminton-player',
  templateUrl: './badminton-player.component.html',
  styleUrls: ['./badminton-player.component.css']
})
export class BadmintonPlayerComponent {
  game=[];
  meerCount:any;
  kvCount:any
  totalnoOfMatchesMeer:any;
  totalnoofMatchesKv:any;
  constructor(private route:Router, private http:HttpClient, private shareSer:SharedDataService){}
  ngOnInit(){
    this.http.get("https://badmaxton-d603d-default-rtdb.firebaseio.com/dailyTrack.json").subscribe(res=>{
      const data =res;
      this.game = Object.entries(data).map(([key, value]) => ({
        match: key, 
        ...value    
    }));
    let meerCount=0;
    let kvCount=0;
    for(let i=0;i<this.game.length;i++){
      if(this.game[i].player1points>this.game[i].player2points){
        if(this.game[i].player1name.includes('M') || this.game[i].player1name.includes('m')){
          meerCount=meerCount+1;
        }
        else{
          kvCount=kvCount+1;
        }
      }
      else{
        if(this.game[i].player2name.includes('M') || this.game[i].player2name.includes('m')){
          meerCount=meerCount+1;
        }
        else{
          kvCount=kvCount+1;
        }

      }
    }

    this.meerCount =meerCount;
    this.kvCount=kvCount;
    this.totalnoOfMatchesMeer= meerCount+kvCount-5;
    this.totalnoofMatchesKv = meerCount+kvCount-4;

    this.shareSer.setMeerKVRecord(this.meerCount, this.kvCount);
  });
}
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
