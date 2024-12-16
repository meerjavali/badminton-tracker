import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile-peer',
  templateUrl: './profile-peer.component.html',
  styleUrls: ['./profile-peer.component.css']
})
export class ProfilePeerComponent {
  constructor(private route:Router, private shareSer:SharedDataService){}
  meerCount=175;
  kvCount=168;
  totalNoOfMatches=343;
  back(){
    this.route.navigate(['/']);
  }
  ngOnInit(){
    this.meerCount = this.meerCount+this.shareSer.getMeerCount();
    this.kvCount = this.kvCount+this.shareSer.getKvCount();
    this.totalNoOfMatches = this.totalNoOfMatches+this.shareSer.getMeerCount()+this.shareSer.getKvCount();
  }
}
