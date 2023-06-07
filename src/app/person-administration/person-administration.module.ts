import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PersonDetailComponent
  ]
})
export class PersonAdministrationModule { }
