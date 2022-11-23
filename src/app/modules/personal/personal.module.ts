import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    MainPersonalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PersonalModule { }
