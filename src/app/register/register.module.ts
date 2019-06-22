import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RegisterRoutingModule} from './register-routing.module';

@NgModule({
  declarations: [
    RegisterRoutingModule.components
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule {

}
