import { Component, OnInit } from "@angular/core";
import { ApiCallerService } from "../api-caller.service";
import { ArticleItem, Article } from "src/data/Article";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.scss"],
})
export class NewsFeedComponent implements OnInit {
  public newsItems: ArticleItem[] = [];
  public userEmail: String = "";

  constructor(
    private apiCaller: ApiCallerService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.getNewsItems();
    this.afAuth.user.subscribe((u) => {
      this.userEmail = u.email;
    });
  }

  public getNewsItems() {
    this.apiCaller.GetNewsItems().subscribe((data: Article[]) => {
      data.forEach((a: Article) => {
        var a_json: any = a.article_json;
        console.log(a_json);
        var title: string = a_json.title;
        var description: string = a_json.description;
        var url: string = a_json.url;

        var item: ArticleItem = new ArticleItem(
          a.article_id,
          a.batch_id,
          title,
          description,
          url
        );
        this.newsItems.push(item);
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut().then((x) => {
      console.log("success");
      this.router.navigate(["login"]);
    });
  }
}
