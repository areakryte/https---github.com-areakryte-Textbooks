import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter/chapter'
import { DbloadService } from '../dbload.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  Chapters: Chapter[] = [];
 
  constructor(private dbloadService: DbloadService) { }
 
  ngOnInit() {
    this.getChapters();
  }
 
  getChapters(): void {
    this.dbloadService.getChapters().subscribe(Chapters => this.Chapters = Chapters.slice(1, 5));
  }
}