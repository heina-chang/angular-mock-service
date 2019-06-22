import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherRoutingModule } from './teacher-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TeacherRoutingModule.components
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
