import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [CommonModule, TimelineModule, CardModule, TagModule],
  exports: [WorkExperienceComponent],
})
export class WorkExperienceModule {}
