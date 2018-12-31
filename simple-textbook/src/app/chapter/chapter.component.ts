import { Component, OnInit } from '@angular/core';
import { Chapter } from './chapter';
import { CHAPTERS } from '../TEST_DATA/mockTOC';
import { DbloadService } from '../dbload.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
 
  chapters: Chapter[];
  // selectedChapter: Chapter;

  constructor(private dbloadService: DbloadService) { }

  ngOnInit() {
    this.getChapters();
  }

  // onSelect(chapter: Chapter): void{
  //   this.selectedChapter = chapter;
  // }

  getChapters(): void{
    // this.chapters = this.dbloadService.getChapters();
    this.dbloadService.getChapters().subscribe(chapters => this.chapters = chapters);
  }
}
