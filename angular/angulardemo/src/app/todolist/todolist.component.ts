import { Component, OnInit } from '@angular/core';
import { EOF } from '@angular/compiler';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  keywords: string;

  historylist: any[] = [];

  todolist: any[] = [];

  constructor(public storage: StorageService) {}

  ngOnInit(): void {
    const todolist: any = this.storage.get('todolist');
    if (todolist) {
      this.todolist = todolist;
    }
  }

  doadd(e): any {
    if (e.keyCode === 13) {
      // alert('11111');
      if (
        !this.tolisthaskeyword(this.todolist, this.keywords) &&
        this.keywords !== ''
      ) {
        this.todolist.push({
          title: this.keywords,
          status: 0,
        });

        this.storage.set('todolist', this.todolist);
      }

      this.keywords = '';
    }
  }

  change(key): void {
    this.storage.set('todolist', this.todolist);
  }

  deletelist(key): void {
    this.todolist.splice(key, 1);
    this.storage.set('todolist', this.todolist);
  }

  tolisthaskeyword(todolist: any, keywords: any): any {
    for (const value of todolist) {
      if (value.title === keywords) {
        return true;
      }
    }

    return false;
  }

  // dosearch(): void {
  //   if (this.historylist.indexOf(this.keywords) === -1) {
  //     this.historylist.push(this.keywords);
  //   }

  //   this.keywords = '';
  // }

  // delethistory(key): void {
  //   this.historylist.splice(key, 1);
  // }
}
