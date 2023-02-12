import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-api',
  templateUrl: './main-api.component.html',
  styleUrls: ['./main-api.component.scss']
})

export class MainApiComponent {
  userName: string = "";
  response: any;
  constructor(private http: HttpClient) {
  }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
  canExit = false;
  onClick() {
    this.canExit = !this.canExit;
  }
}