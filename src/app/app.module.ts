import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HomeworkModule} from './homework/homework.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeworkMockDataService} from './core/services/homeworkMockDataService';

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    // StudentsComponent,
    // StudentComponent,
    // LoginComponent,
    // TeacherComponent,
    // LessonComponent,
    // LoginComponent,
    // LoginhomeComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HomeworkModule,
  ],
  providers: [HomeworkMockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
