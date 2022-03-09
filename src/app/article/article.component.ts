import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:any = {};

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle() {
    this.articleService.getArticle().pipe(
      tap((result: any) => {
        if(result.status === "ok"){
          this.article = result;
          console.log(result) ;
        }
      })
    ).subscribe()
  }

  removeHTML(str: string) { 
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return this.subDetailArticle(tmp.textContent) || this.subDetailArticle(tmp.innerText) || "";
  }

  subDetailArticle(str: any) {
    return str.substring(0,200) + "...";
  }
}
