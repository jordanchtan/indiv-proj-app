import { Component, OnInit, Input } from "@angular/core";
import { NewsItem } from "src/data/NewsItem";
import { ApiCallerService } from "../api-caller.service";
import { Rating } from "src/data/Rating";

@Component({
  selector: "news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input() index: number;
  public displayRatingPanel: boolean = true;
  public ratingVal: number = 5;

  constructor(private apiCaller: ApiCallerService) {}

  ngOnInit() {}

  public formatLabel(value: number): string {
    return value.toString();
  }

  public onClick() {
    this.displayRatingPanel = true;
  }

  data: any;
  public submitRating() {
    var rating: Rating = new Rating(this.ratingVal);
    this.apiCaller.AddRating(rating).subscribe(x => {
      this.displayRatingPanel = false;
      this.data = x;
    });
  }
}
