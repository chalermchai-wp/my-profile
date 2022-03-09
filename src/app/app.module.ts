import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AboutMeModule } from './about-me/about-me.module';
import { EducationModule } from './education/education.module';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { SkillModule } from './skill/skill.module';
import { TitleBarModule } from './title-bar/title-bar.module';
import { ArticleModule } from './article/article.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AboutMeModule,
    EducationModule,
    WorkExperienceModule,
    SkillModule,
    TitleBarModule,
    ArticleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
