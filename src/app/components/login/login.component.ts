import { AuthentificationService } from './../../services/authentification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  constructor( private authService:AuthentificationService,
    private route:Router) { }

    ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
    if(auth) {
    this.route.navigateByUrl('/')
    }
    })
    }

    onLogin() {
    this.authService.login(this.email, this.password)
    .then(auth => {
    if(auth) {
    console.log('you are logged successfully!')
    }
    this.route.navigateByUrl('/')
    })
    .catch(error => {
      console.log(error)
    }) 
    }
    

    onLoginGoogle() {
    this.authService.loginWithGoogle()
    .then(auth => {
    if(auth) {
      console.log('you are logged successfully!')
    }
    this.route.navigateByUrl('/')
    })
    .catch(error => {
      console.log(error)
    })
    }

    onLoginFacebook() {
      this.authService.loginWithFacebook()
      .then(auth => {
      if(auth) {
        alert("yesss")
        console.log('you are logged successfully!')
      }
      this.route.navigateByUrl('/')
      })
      .catch(error => {
        console.log(error)
      })
      }
}
