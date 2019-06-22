import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HomeworkMockDataService} from '../core/services/homeworkMockDataService';
import {Assignment, MyClass} from '../shared/interfaces';
// import {IModalContent, ModalService} from "../core/modal/modal.service";


@Component({
  selector: 'app-homework',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({transform: 'translateX(300px)'}),
        animate('200ms ease-out', keyframes([
          style({transform: 'translateX(300px)'}),
          style({transform: 'translateX(0)'})

        ]))]),
      transition('*=>void', [style({transform: 'translateX(0px)'}),
        animate('250ms ease-in',   keyframes([
          style({transform: 'translateY(-20px)', opacity: 1, offset: 0.2}),
          style({transform: 'translateY(250px)', opacity: 0 , offset: 1})

        ]))])

    ])
  ]
})
export class TeacherComponent implements OnInit {
  todoArray: string[] = [];
  previousHomework: Assignment;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private homeworkMockDataService: HomeworkMockDataService) {}

  ngOnInit(): void {
    this.constructForm();
    this.previousHomework = {
      week: 0,
      practice: []
    };
    // this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
    // this.homeworkMockDataService.getLastHomework('saturday-afternoon')
    //   .subscribe((data: MyClass) => this.previousHomework = data);
    //
    // console.log(this.previousHomework);
  }

  constructForm() {
    this.form = this.fb.group({
      todo: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.todoArray.push(this.form.get('todo').value);
    this.form.reset();
  }

  onClickSave() {
    // console.log(this.todoArray);
    this.addHomework();
    this.getPreviousHomework();
    this.todoArray = [];
    // Dirty show display modal dialog to user to confirm leaving
    // const modalContent: IModalContent = {
    //   header: 'Lose Unsaved Changes?',
    //   body: 'You have unsaved changes! Would you like to leave the page and lose them?',
    //   cancelButtonText: 'Cancel',
    //   OKButtonText: 'Leave'
    // };
    // return this.modalService.show(modalContent);
  }
  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


  getPreviousHomework() {
    this.homeworkMockDataService.getLastHomework('saturday-afternoon')
      .subscribe((data: Assignment) => {
      this.previousHomework = data;
      });
    // console.log(this.previousHomework);
  }

  addHomework() {
    this.homeworkMockDataService.insertHomework([...this.todoArray]).subscribe();
  }
}
