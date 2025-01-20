import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  getArticle(){
    return this.httpClient.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chalermchai.wp")
  }

}
