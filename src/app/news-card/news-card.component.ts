import { Component, OnInit, Input } from "@angular/core";
import { NewsItem } from "src/data/NewsItem";

@Component({
  selector: "news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input() index: number;
  public displayRatingPanel: boolean = false;
  public ratingVal: number = 5;

  constructor() {}

  ngOnInit() {}

  public formatLabel(value: number): string {
    return value.toString();
  }

  public onClick() {
    this.displayRatingPanel = true;
  }

  public submitRating() {}
}
