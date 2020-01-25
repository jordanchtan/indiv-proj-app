import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from 'src/data/NewsItem';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
