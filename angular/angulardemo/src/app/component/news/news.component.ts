import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = '我是一个新闻标题';

  public news: any = '我是个新闻类型';

  public zhangsan: any = '我是张三的属性';

  public message: any = '我是一条信息';

  public content = '<h3>我是一个html方法</h3>';

  public arr: any[] = [111, 222, 333];

  public car: any[] = [
    {
      title: '宝马',
      list: [
        {
          kind: 'X1',
          price: '30w'
        },
        {
          kind: 'X2',
          price: '30w'
        },
        {
          kind: 'X3',
          price: '30w'
        }]
    },
    {
      title: '奥迪',
      list: [
        {
          kind: 'Q1',
          price: '30w'
        },
        {
          kind: 'Q2',
          price: '30w'
        },
        {
          kind: 'Q3',
          price: '30w'
        }]
    }
  ];

  constructor() {
    console.log(this.message);
    this.message += '----TS';
   }

  ngOnInit(): void {
  }

}
