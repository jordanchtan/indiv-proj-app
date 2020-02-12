import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
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
      password: ["", Validators.required]
    });
  }

  // login() {
  //   const val = this.form.value;

  //   // if (val.email && val.password) {
  //   //   this.authService.login(val.email, val.password).subscribe(() => {
  //   //     console.log("User is logged in");
  //   //     this.router.navigateByUrl("/");
  //   //   });
  //   // }
  // }

  register() {
    this.afAuth.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((resp: firebase.auth.UserCredential) => {
        console.log("success");
        this.router.navigate(["login"]);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  goToLogin() {
    this.router.navigate(["login"]);
  }
}
