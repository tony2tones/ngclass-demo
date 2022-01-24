import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public styleToggle: boolean = false;
  title = 'ngclass-demo';

  public people = [
    {
      name: 'tony',
      location: 'South Africa',
      gender: 'male',
    },
    {
      name: 'luca',
      location: 'Italy',
      gender: 'male',
    },
    {
      name: 'donny',
      location: 'South Africa',
      gender: 'male',
    },
    {
      name: 'cel',
      location: 'Netherlands',
      gender: 'female',
    },
  ]

  public styleToggler() {
    this.styleToggle = !this.styleToggle;
  }

}
