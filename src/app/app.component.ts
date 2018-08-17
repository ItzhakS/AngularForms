import { Component } from '@angular/core';
import { User } from './user';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['BAseball','Angular','Buttons','Windows','Linux'];

  topicHasError = true;
  submitted = false;

  userModel = new User('','', 0, "", '', true);

  constructor(private _enrollmentService:EnrollService){}

  validateSelect(value){
    if(value == 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
      )
  }

  newForm(){
    this.submitted = false;
  }
}
