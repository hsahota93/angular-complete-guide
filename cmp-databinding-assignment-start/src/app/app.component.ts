import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenList: number[] = [];
  oddList: number[] = [];

  logEmittedNumber(event: number) {

    console.log(event);

    if(event % 2 === 0) {

      this.evenList.push(event);
    } else {

      this.oddList.push(event);
    }
  }
}
