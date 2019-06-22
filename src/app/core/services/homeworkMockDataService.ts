import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Assignment, Homework, MyClass} from '../../shared/interfaces';
// import { of } from 'rxjs/observable/of';
// import {lastHomework} from "./test-data";

@Injectable()
export class HomeworkMockDataService {
  homeworkList: MyClass;

  constructor(private http: HttpClient) {
    this.homeworkList = {
      className: 'saturday-afternoon',
      homework: [
      ],
      section: 'spring',
      year: '2019'
    };
  }


  getLastHomework(className: string): Observable<Assignment> {
    const numOfhk = this.homeworkList.homework.length;

    console.log(this.homeworkList);
    return of(this.homeworkList.homework[numOfhk > 2 ? numOfhk - 2 : 0]);
  }

  insertHomework(homework: string[]): Observable<boolean> {
    const weekNum = this.homeworkList.homework.length;
    this.homeworkList.homework.push({practice: homework, week: weekNum + 1});
    // console.log(this.homeworkList);
    // const myHomework: MyClass = {
    //   className: 'saturday-afternoon',
    //   homework: [
    //     {
    //       practice: homework,
    //       week: 1
    //     }
    //   ],
    //   section: 'spring',
    //   year: '2019'
    // };
    //
    //
    // this.homeworkList = myHomework;
    return of(true);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'api server error');
  }
}
