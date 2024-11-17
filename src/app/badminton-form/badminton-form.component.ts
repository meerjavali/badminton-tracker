import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-badminton-form',
  templateUrl: './badminton-form.component.html',
  styleUrls: ['./badminton-form.component.css']
})
export class BadmintonFormComponent {
  @ViewChild('f')  signupForm: NgForm;
  onSubmit(){
    console.log(this.signupForm);
  }

}
