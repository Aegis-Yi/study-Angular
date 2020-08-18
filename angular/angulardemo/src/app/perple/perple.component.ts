import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perple',
  templateUrl: './perple.component.html',
  styleUrls: ['./perple.component.css']
})
export class PerpleComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '2',
    cityselect: ['北京', '上海', '深圳'],
    city: '北京',
    hobby: [
      {
        title: '编程',
        ckecked: false
      },
      {
        title: '运动',
        checked: false
      },
      {
        title: '打游戏',
        checked: false
      }
    ],
    mark: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
