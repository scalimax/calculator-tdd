import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-tdd';
  mainDisplayText = '0';

  digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  pressKey(event: any) {
    if (this.mainDisplayText === '0') this.mainDisplayText = '';
    this.mainDisplayText += event.target.innerText;
  }

  sum(event: any ) {

  }

  enter(event: any) {
    this.mainDisplayText = '10';
  }
}
