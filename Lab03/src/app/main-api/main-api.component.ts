import { Component } from '@angular/core';
import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-main-api',
  templateUrl: './main-api.component.html',
  styleUrls: ['./main-api.component.scss']
})

export class MainApiComponent {
  url = 'https://api.github.com/search/users?q=';
  search = document.getElementById('search');
  stream$ = fromEvent(this.search, 'input').pipe(
    map(value => {
      console.log(value);
    })
  );
}