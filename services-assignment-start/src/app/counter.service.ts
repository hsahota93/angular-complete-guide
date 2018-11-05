import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveCounter = 0;
  activeCounter = 0;

  constructor() { }

  incrementActiveCounter() {

    this.activeCounter++;
    console.log('Active: ' + this.activeCounter);
  }

  incrementInactiveCounter() {

    this.inactiveCounter++;
    console.log('Inactive: ' + this.inactiveCounter);
  }
}
