import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-peer',
  templateUrl: './profile-peer.component.html',
  styleUrls: ['./profile-peer.component.css']
})
export class ProfilePeerComponent {
  constructor(private route:Router){}
  back(){
    this.route.navigate(['/']);
  }
}
