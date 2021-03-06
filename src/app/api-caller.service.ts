import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "src/data/Article";
import { Rating } from "src/data/Rating";

@Injectable({
  providedIn: "root",
})
export class ApiCallerService {
  // private serviceUrl: string = "http://127.0.0.1:5000";
  private serviceUrl: string = "https://indiv-proj-serv.herokuapp.com";

  constructor(private http: HttpClient) {}

  // maybe ret http resp

  public GetNewsItems(): Observable<Article[]> {
    return this.http.get<Article[]>(this.serviceUrl + "/news-items");
  }

  public AddRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(this.serviceUrl + "/ratings", rating);
  }
}
