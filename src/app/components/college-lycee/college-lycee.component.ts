import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-lycee',
  templateUrl: './college-lycee.component.html',
  styleUrls: ['./college-lycee.component.css']
})
export class CollegeLyceeComponent implements OnInit {
param:string
param1:string
param2:string
titleNiveau:string
niveau1:string
niveau2:string
niveau3:string
status:boolean=false
constructor(private route: ActivatedRoute,private router: Router) { 
  }

  ngOnInit(): void {        
  this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
    this.param=this.route.snapshot.params['param']
      if(this.param==='college') {
        this.titleNiveau="Collège"
        this.niveau1="1ère année Collège"
        this.niveau2="2ème année Collège"
        this.niveau3="3ème année Collège"
      }
      if(this.param==='lycee') { 
        this.titleNiveau="Lycée"
      this.niveau1="Tronc Commun"
      this.niveau2="1ère Bac"
      this.niveau3="2ème Bac"
    }
  }
 
  status1() {
    this.status=!this.status
    if(this.param=='college') {
      this.param1='1AcMath'
      this.param2='1AcPc'}
      if(this.param=='lycee') {
        this.param1='troncMath'
        this.param2='troncPc'}
  }
  status2() {
    this.status=!this.status
    if(this.param=='college') {
      this.param1='2AcMath'
      this.param2='2AcPc'}
      if(this.param=='lycee') {
        this.param1='1BacMath'
        this.param2='1BacPc'}
  }
  status3() {
    this.status=!this.status
    if(this.param=='college') {
      this.param1='3AcMath'
      this.param2='3AcPc'}
      if(this.param=='lycee') {
        this.param1='2BacMath'
        this.param2='2BacPc'}
  }

}
