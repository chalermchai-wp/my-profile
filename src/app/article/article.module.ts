import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, CardModule],
  exports: [ArticleComponent],
})
export class ArticleModule {}
