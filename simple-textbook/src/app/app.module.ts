import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,    
    DashboardComponent,
    ChapterComponent,
    ChapterDetailsComponent,
    MessagesComponent,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
