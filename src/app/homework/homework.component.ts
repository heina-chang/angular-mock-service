import {AfterViewInit, Component, OnInit} from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  // ngAfterViewInit(): void {
  //   //
  //   // setTimeout( function() {
  //   //   var elem = document.querySelector('.sidenav');
  //   //   var instance = M.Sidenav.init(elem, options);
  //   // }, 0);
  //   //
  //   // var elems = document.querySelectorAll('.collapsible');
  //   // var instances = M.Collapsible.init(elems, options);
  // }
  // todoArray: string[] = [];
  // collapsibleElements: any[] = [{
  //   icon: 'mdi-image-filter-drama',
  //   title: 'First',
  //   content: 'Lorem ipsum dolor sit amet.'
  // },{
  //   icon: 'mdi-maps-place',
  //   title: 'Second',
  //   content: 'Lorem ipsum dolor sit amet.'
  // },{
  //   icon: 'mdi-social-whatshot',
  //   title: 'Third',
  //   content: 'Lorem ipsum dolor sit amet.'
  // }];

  // public form: FormGroup;
  // constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});

    const tabElem = document.querySelector('.tabs');
    // const options= {};
    M.Tabs.init(tabElem, {});
    // this.collapsibleElements = [{
    //   icon: 'mdi-image-filter-drama',
    //   title: 'First',
    //   content: 'Lorem ipsum dolor sit amet.'
    // },{
    //   icon: 'mdi-maps-place',
    //   title: 'Second',
    //   content: 'Lorem ipsum dolor sit amet.'
    // },{
    //   icon: 'mdi-social-whatshot',
    //   title: 'Third',
    //   content: 'Lorem ipsum dolor sit amet.'
    // }
    // ];
    // this.constructForm();
  }

  // constructForm() {
  //   this.form = this.fb.group({
  //     todo: this.fb.control(null, Validators.required)
  //   });
  // }
  //
  // onSubmit() {
  //   if (this.form.invalid) { return; }
  //   this.todoArray.push(this.form.get('todo').value);
  //   this.form.reset();
  // }
  //
  // onDeleteItem(index) {
  //   this.todoArray.splice(index, 1);
  // }


}
