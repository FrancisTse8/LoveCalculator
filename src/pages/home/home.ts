import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = '';
  name2 = '';
  magicNumber = 31; //use this to customize LOVE
  get score() {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    if (letters.length == 0)
      {return "0";}
      else
      {return (sum+this.magicNumber) % 101;}
  }

}
