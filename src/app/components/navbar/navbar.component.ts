import { Router } from '@angular/router';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  now: string;
  isloggedIn:boolean=false
  constructor(private authService:AuthentificationService,private route:Router) {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
   }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isloggedIn=true
      }else {
        this.isloggedIn= false
      }
    })
  }

  logOut() {
    this.authService.logOut()
    this.isloggedIn=false
    this.route.navigateByUrl('/smpzdflogin')
  }

}
