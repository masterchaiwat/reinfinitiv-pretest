import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  searchStuff = '';
  somethings: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchSomething()
    .subscribe(
      res => {
        this.somethings = res;
      }
    );
  }

}