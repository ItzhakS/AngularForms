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

  userModel = new User('Rob','a@a.com', 1234543, "default", 'morning', true);

  constructor(private _enrollmentService:EnrollService){}

  validateSelect(value){
    if(value == 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => console.log('Error', error)
      )
  }
}
