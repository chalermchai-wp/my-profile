import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule, 
    FieldsetModule,
  ],
  exports: [EducationComponent],
})
export class EducationModule {}
