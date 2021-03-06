import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewsCardComponent } from "./news-card/news-card.component";
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { MatCardModule } from "@angular/material/card";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { RegisterComponent } from "./register/register.component";
import { AngularFireAuthGuardModule } from "@angular/fire/auth-guard";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { ReactorComponent } from "./reactor/reactor.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    NewsFeedComponent,
    LoginComponent,
    RegisterComponent,
    ReactorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
