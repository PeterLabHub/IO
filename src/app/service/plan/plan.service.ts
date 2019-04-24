import { HttpService } from './../http-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private http: HttpService) {}
  getPlan(state: string, callback?: (res) => void) {
    this.http.POST(
      'http://mobile.safe.jsyxx.cn/mobile/find/user/train/plan',
      {
        idCard: '610322197906236483',
        pageNumber: '1',
        pageSize: '6',
        state: state
      },
      (res, err) => {
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
      }
    );
  }
}
