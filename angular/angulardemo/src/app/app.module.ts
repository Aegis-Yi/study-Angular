import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { TitleComponent } from './component/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
