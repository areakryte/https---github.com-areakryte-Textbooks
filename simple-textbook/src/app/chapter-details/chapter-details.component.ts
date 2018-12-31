import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Chapter } from '../chapter/chapter';
import { DbloadService } from '../dbload.service';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent implements OnInit {

  chapter: Chapter;

  constructor(private route: ActivatedRoute, private DBloadService: DbloadService, private location: Location){
  }

  ngOnInit():void {
    this.getChapter();
  }

  getChapter():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.DBloadService.getChapter(id).subscribe(chapter=> this.chapter = chapter);
  }

  goBack():void {
    this.location.back();
  }
}
