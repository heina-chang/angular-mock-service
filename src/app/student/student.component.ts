import { Component, OnInit } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

}
