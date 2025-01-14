import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TitleBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TitleBarComponent
  ]
})
export class TitleBarModule { }
