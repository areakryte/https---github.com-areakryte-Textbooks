import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Chapter } from './chapter/chapter';
import { CHAPTERS } from './TEST_DATA/mockTOC';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class DbloadService {

  constructor(private messageService: MessageService) { }

  getChapters(): Observable<Chapter[]>{
    this.messageService.add("Fetching Chapter List from database");
    return of(CHAPTERS);
  }

  getChapter(id:number): Observable<Chapter>{
    this.messageService.add("DBloadService: fetched Chapter Id= " + id);
    return of(CHAPTERS.find(chapter=> chapter.chapterNumber === id));
  }
}
