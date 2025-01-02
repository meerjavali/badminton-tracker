import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badminton-form',
  templateUrl: './badminton-form.component.html',
  styleUrls: ['./badminton-form.component.css']
})
export class BadmintonFormComponent {
  @ViewChild('f')  signupForm: NgForm;

  constructor(private http:HttpClient,private route:Router){}
  onSubmit(){
    if(this.signupForm.value.submittedBY == "kv" || this.signupForm.value.submittedBY == "meer"){
      this.http.post("https://badmaxton-d603d-default-rtdb.firebaseio.com/dailyTrack.json", this.signupForm.value).subscribe(res=>{
        this.signupForm.reset();
      });
   }
   else{
    alert("submission should be done by admin user !!! plz contact Meer");
    this.signupForm.reset();
   }
  
  }
  back(){
    this.route.navigate(['/']);
  }

}
