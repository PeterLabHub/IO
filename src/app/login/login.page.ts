import { UserService } from './../service/user/user.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { LocaleProviderService } from 'ng-zorro-antd-mobile';
import { en_US, ru_RU, zh_CN, sv_SE, da_DK } from 'ng-zorro-antd-mobile';


import { Modal, Toast, ModalServiceComponent, WhiteSpaceModule } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [Toast, Modal],
})
export class LoginPage implements OnInit {
  username: string = 'admin';
  password: string = '123123123';
  errorMsg: string = '';
  nameMsg: string = '';
  pwdMsg: string = '';
  status: boolean = false;
  lang = [
    {
      value: '中文',
      label: '中文',
      language: zh_CN
    }
  ];

  locale = '中文';
  data = [
    {
      value: '1',
      label: 'Food'
    },
    {
      value: '2',
      label: 'Supermarket'
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true
    }
  ];

  datalogin = [
    {
      value: '1',
      label: '登录'
    },
    {
      value: '2',
      label: 'Sign in'
    }
  ];

  dataregister = [
    {
      value: '1',
      label: '注册'
    },
    {
      value: '2',
      label: 'Sign up'
    }
  ];


  languages = [
    {
      value: '中文',
      label: '中文',
      language: zh_CN
    },
    {
      value: 'English',
      label: 'English',
      language: en_US
    }
  ];
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private _localeProviderService: LocaleProviderService
  ) { 
    this.onChange(1);
    this.onChange(2);
  }
  //内容发生改变时触发的事件
  onChange(type: number) {
    if (type == 1) {
      //用户名校验
      let nameReg = /^[a-zA-Z0-9_-]{0,}$/;
      if (!nameReg.test(this.username)) {
        this.nameMsg = '用户名不能含有中文或特殊字符！';
      } else if (this.username.length > 25) {
        this.nameMsg = '用户名超过长度限制！';
      } else if (this.username.length <= 0) {
        this.nameMsg = '用户名不能为空！';
      } else {
        this.nameMsg = '';
      }
    } else if (type == 2) {
      //密码校验
      //包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      //let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      //6-20个字母、数字、下划线
      let pwdReg = /^(\w){6,20}$/;
      if (this.password.length < 6 || this.password.length > 20) {
        this.pwdMsg = '密码长度为6~20位';
      } else if (!pwdReg.test(this.password)) {
        this.pwdMsg = '密码由字母、数字、下划线组成';
      } else {
        this.pwdMsg = '';
      }
    }
    this.errorMsg = this.nameMsg.length <= 0 ? this.pwdMsg : this.nameMsg;
    if (
      this.errorMsg.length <= 0 &&
      this.username.length > 0 &&
      this.password.length > 0
    ) {
      //登录按钮可以点击
      this.status = true;
    } else {
      //登录按钮不可点击
      this.status = false;
    }
  }
  //失去焦点 【(ionFocus)="onFocus()"获取焦点时的事件】
  onBlur() {
    if (this.username.length <= 0) {
      this.status = false;
      this.errorMsg = '用户名不能为空！';
    } else if (this.password.length <= 0) {
      this.errorMsg = '密码不能为空！';
    }
  }


  ngOnInit() { }
  onLogin() {
    // this.navCtrl.navigateForward('/home');
    // this.userService.login({
    //   showapi_appid: '64575',
    //   showapi_sign: 'a3b9284758114da98533925c4de04786'
    // });
    this.userService.login({
      userName: '610322197906236483',
      password: '236483',
      version: '18'
    });
    // this.userService.login1(url);
  }
  toRegister() {
    this.navCtrl.navigateForward('/register');
  }

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  onChangeLanuage(item) {
    console.log(item)
    this.locale = item[0].value;
    const currentLocale = this.languages.find(i => i.value === this.locale).language;
    this._localeProviderService.setLocale(currentLocale);
  }


}
