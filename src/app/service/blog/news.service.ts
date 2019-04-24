import { HttpService } from './../http-service';
import { Injectable } from '@angular/core';
import { NewsInfoData } from 'src/app/model/NewsInfo';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpService) {}
  getNewsData() {
    this.http.GET(
      'http://wcf.open.cnblogs.com/news/GetData',
      null,
      (res, err) => {
        if (res) {
          console.log(res);
        }
        if (err) {
          console.log('error show : ');
          console.log(err);
        }
      }
    );
  }
  getNews(url: string, callback?: (res) => void) {
    this.http.GET(url, null, (res, err) => {
      if (res) {
        console.log(res);
        if (callback) {
          callback(res);
        }
      }
      if (err) {
        console.log('error show : ');
        console.log(err);
      }
    });
  }
}
