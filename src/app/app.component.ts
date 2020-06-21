import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";
// import { AngularFireAuth } from "@angular/fire/auth/auth";
// import { AngularFireAuth } from "@angular/fire/auth";
// import { auth } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "indiv-project-app";
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
