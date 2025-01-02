import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-game-record',
  templateUrl: './daily-game-record.component.html',
  styleUrls: ['./daily-game-record.component.css']
})
export class DailyGameRecordComponent implements OnInit{

  game=[];
  ngOnInit(): void {
    this.http.get("https://badmaxton-d603d-default-rtdb.firebaseio.com/dailyTrack.json").subscribe(res=>{
      const data =res;
      this.game = Object.entries(data).map(([key, value]) => ({
        match: key, 
        ...value    
    }));
      
    });
    
  }
  constructor(private http:HttpClient, private route:Router){}
  back(){
    this.route.navigate(['/']);
  }

}
