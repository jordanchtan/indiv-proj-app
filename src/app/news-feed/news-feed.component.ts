import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../api-caller.service";
import { NewsItem } from "src/data/NewsItem";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.scss"]
})
export class NewsFeedComponent implements OnInit {
  public newsItems: NewsItem[] = [];
  constructor(
    private apiCaller: ApiCallerService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

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

  logout() {
    this.afAuth.auth.signOut().then(x => {
      console.log("success");
      this.router.navigate(["login"]);
    });
  }
}
