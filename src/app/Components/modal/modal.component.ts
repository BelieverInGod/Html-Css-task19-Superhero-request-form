import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() switchEmiter = new EventEmitter<boolean>()
  status: boolean = false;
  username: string = '';
  password: string = '';
  
  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.status = true
    }
  }

  onSwitch(event: boolean) {
    this.switchEmiter.emit(event)
  }

  onChangeName(event: any) {
    this.username = event.target.value;
  }

  onChangePass(event: any) {
    this.password = event.target.value;
  }
  
  clickEvent(){
      this.status = !this.status;       
  }

  public saveUser(key: string, value: string) {   
    let user = {
      username: this.username,
      password: this.password
    }
    if (user.username !== '' && user.password !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      if(localStorage.getItem('user')) {
        this.status = true
        this.onSwitch(true)
      }
    }
  }
}
