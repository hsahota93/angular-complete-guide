import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hidden: boolean = false;
  secretMessage: string = "I love birds";
  counter: number = 0;
  numArray = [];

  showHideSecret() {

    this.hidden = !this.hidden;
    this.counter++;
    this.numArray.push(new Date);
    console.log(this.counter);
  }
}
