import { HttpService } from './../http-service';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageServic } from '../storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpService,
    private router: Router,
    private storage: StorageServic,
    public navCtrl: NavController
  ) {}

  // TODO 暂时使用别人的登录地址
  login(params: any) {
    let url = 'http://route.showapi.com/107-33';
    let url1 = 'http://mobile.safe.jsyxx.cn/mobile/login';
    //显示等待样式
    this.http.showLoading('努力登录中...');
    return this.http.POST(url1, params, (res, error) => {
      this.http.hideLoading();
      if (error) {
        // 网络请求出现错误
        console.log('err=' + error);
      }
      if (res) {
        // 网络请求成功
        console.log('login success');
        if (res.success) {
          this.storage.write('userInfo', res.data);
          //成功
         //  this.navCtrl.navigateForward('/home',true,{queryParams:{name:'Tom'}});
          this.router.navigateByUrl('/tabs/tab1');
          // this.router.navigate(['/home'],{queryParams:{name:'Tom'}});
        } else {
          //失败
          let msg = res.msg;
          if (!msg) {
            msg = '操作失败！';
          }
          console.log(msg);
        }
      }
    });
  }

  // login1(url) {
  //   //let url = 'http://route.showapi.com/107-33';
  //   this.https
  //     .post(url, {}, {})
  //     .then(data => {
  //       console.log('login1');
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log('login1 err');
  //       console.log(err);
  //     });
  // }
}
