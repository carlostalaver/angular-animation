import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toState = 'stateLogin';

  login() {
    this.toState = 'stateLogin';
  }

  register() {
    this.toState = 'stateRegister';
  }
}
