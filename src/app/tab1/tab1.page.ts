import { Component } from '@angular/core';
import { ElMessageService } from 'element-angular'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private message: ElMessageService,
  ) {
  }

  handle(): void {
    this.message.show('这是一条消息提示')
  }


}
