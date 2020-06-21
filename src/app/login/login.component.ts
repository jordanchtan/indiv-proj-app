import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  form: FormGroup;
  email: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((resp: firebase.auth.UserCredential) => {
        console.log("success");
        this.router.navigate(["news-feed"]);
      });
  }

  goToRegister() {
    this.router.navigate(["register"]);
  }
}
