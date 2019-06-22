import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeworkRoutingModule } from './homework-routing.module';
import {CommonModule} from "@angular/common";
// import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    HomeworkRoutingModule.components
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HomeworkRoutingModule
  ]
})
export class HomeworkModule { }
