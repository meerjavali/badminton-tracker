import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-latest-game',
  templateUrl: './latest-game.component.html',
  styleUrls: ['./latest-game.component.css']
})
export class LatestGameComponent {
@Input() game=[];
latestGame=[];

ngOnChanges(){
const latestDate = Math.max(...this.game.map(item=> new Date(item.date).getTime()));
this.latestGame = this.game.filter(item => new Date(item.date).getTime()===latestDate);
}
}
