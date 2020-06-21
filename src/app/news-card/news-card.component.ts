import { Component, OnInit, Input } from "@angular/core";
import { ArticleItem } from "src/data/Article";
import { ApiCallerService } from "../api-caller.service";
import { Rating } from "src/data/Rating";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: "news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"],
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: ArticleItem;
  @Input() index: number;
  public displayRatingPanel: boolean = true;
  public userEmail: string;

  constructor(
    private apiCaller: ApiCallerService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.afAuth.user.subscribe((u) => {
      this.userEmail = u.email;
    });
  }

  emojiList = ["Love", "Wow", "Haha", "Sad", "Angry"];
  emojiPath(emoji) {
    emoji = emoji.toLowerCase();
    return `assets/${emoji}.png`;
  }

  public formatLabel(value: number): string {
    return value.toString();
  }

  public onClick() {
    this.displayRatingPanel = true;
  }

  data: any;
  public submitRating(ratingVal) {
    var rating: Rating = new Rating(
      ratingVal,
      this.userEmail,
      this.newsItem.article_id
    );
    this.apiCaller.AddRating(rating).subscribe((x) => {
      this.displayRatingPanel = false;
      this.data = x;
    });
  }
}
