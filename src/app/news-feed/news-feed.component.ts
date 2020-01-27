import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../api-caller.service";
import { NewsItem } from "src/data/NewsItem";

@Component({
  selector: "news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.scss"]
})
export class NewsFeedComponent implements OnInit {
  public newsItems: NewsItem[] = [];
  constructor(private apiCaller: ApiCallerService) {}

  ngOnInit() {
    this.getNewsItems();
  }

  public getNewsItems() {
    this.apiCaller.GetNewsItems().subscribe((data: NewsItem[]) => {
      data.forEach((item: NewsItem) => {
        this.newsItems.push(item);
      });
    });
  }
}
