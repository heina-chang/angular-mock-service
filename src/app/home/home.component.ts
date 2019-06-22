import { Component, OnInit } from '@angular/core';

declare var M: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elem = document.querySelector('.tabs');
    // const options= {};
    M.Tabs.init(elem, {});


    const dateElems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(dateElems, {});
  }

}
