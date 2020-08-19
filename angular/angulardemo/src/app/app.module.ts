import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { TitleComponent } from './component/title/title.component';
import { PerpleComponent } from './perple/perple.component';
import { TodolistComponent } from './todolist/todolist.component';

import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    TitleComponent,
    PerpleComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
