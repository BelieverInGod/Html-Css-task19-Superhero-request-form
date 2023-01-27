import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  switch: boolean = false

  addSwitch(event:boolean) {
    this.switch = event
  }

  public removeUser() {
    this.switch = false
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user')
    }
  }
}
