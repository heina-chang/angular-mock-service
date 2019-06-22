import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Homework } from '../../shared/interfaces';


@Injectable()
export class HomeworkDataService {

  homeworkBaseUrl = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) { }


  getLastHomework(className: string): Observable<Homework> {
    return this.http.get<Homework>(this.homeworkBaseUrl + '/' + className)
      .pipe(catchError(this.handleError));
  }

  insertHomework(homework: Homework): Observable<boolean> {
    return this.http.put(this.homeworkBaseUrl, homework)
      .pipe(
        map(res => true),
        catchError(this.handleError)
      );
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
