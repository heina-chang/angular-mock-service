import { Component, OnInit } from '@angular/core';

const addFlag = false;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  addStudent = false;
  count: number;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

}
