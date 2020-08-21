import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  flag = true;

  ngOnInit(): void {
    const obox: any = document.getElementById('box');
    console.log(obox.innerHTML);
    obox.style.color = 'red';

    // 获取不到doc节点
    // let obox1: any = document.getElementById('box1');
    // obox1.style.color = 'red';
  }

  AfterViewInit(): void {
    const obox1: any = document.getElementById('box1');
    console.log(obox1.innerHTML);
    obox1.style.color = 'blue';
  }
}
