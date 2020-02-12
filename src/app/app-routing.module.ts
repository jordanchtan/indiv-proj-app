import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import {
//   AngularFireAuthGuard,
//   hasCustomClaim,
//   redirectUnauthorizedTo,
//   redirectLoggedInTo
// } from "@angular/fire/auth-guard";
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import {
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AngularFireAuthGuard
} from "@angular/fire/auth-guard";
import { RegisterComponent } from "./register/register.component";

const adminOnly = () => hasCustomClaim("admin");
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToNewsFeed = () => redirectLoggedInTo(["news-feed"]);
const belongsToAccount = next => hasCustomClaim(`account-${next.params.id}`);

export const routes: Routes = [
  // {
  //   path: "",
  //   component: LoginComponent,
  //   canActivate: [AngularFireAuthGuard],
  //   data: { authGuardPipe: redirectLoggedInToNewsFeed }
  // },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToNewsFeed }
  },
  {
    path: "news-feed",
    component: NewsFeedComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToNewsFeed }
  },
  {
    path: "**",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToNewsFeed }
  }
  // { path: 'admin', component: AdminComponent,        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: adminOnly }},
  // { path: 'accounts/:id', component: AdminComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: belongsToAccount }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
