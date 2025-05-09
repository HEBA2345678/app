
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: string = '';

  ngOnInit() {
    const name = prompt('Please enter your name:');
    if (name) {
      this.username = name;
    }
  }
}

