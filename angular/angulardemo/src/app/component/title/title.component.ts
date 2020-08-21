import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';
import { CompileIdentifierMetadata } from '@angular/compiler';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  // 获取dom节点
  @ViewChild('mybox') mybox: any;
  @ViewChild('chliddom') chliddom: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.mybox);

    this.mybox.nativeElement.style.color = 'orange';

    console.log(this.chliddom);

    this.chliddom.run();

  }
}
