import { Tas3aPcService } from './../../services/tas3a-pc.service';
import { Tas3aMathService } from './../../services/tas3a-math.service';
import { Tas3aCtrPcService } from './../../services/tas3a-ctr-pc.service';
import { Tas3aCtrMathService } from './../../services/tas3a-ctr-math.service';
import { TamnaPcService } from './../../services/tamna-pc.service';
import { TamnaMathService } from './../../services/tamna-math.service';
import { TamnaCtrPcService } from './../../services/tamna-ctr-pc.service';
import { TamnaCtrMathService } from './../../services/tamna-ctr-math.service';
import { AuthentificationService } from './../../services/authentification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sab3aCtrPcService } from './../../services/sab3a-ctr-pc.service';
import { Sab3aCtrMathService } from './../../services/sab3a-ctr-math.service';
import { Controles } from './../../models/controles';
import { Sab3aPcService } from './../../services/sab3a-pc.service';
import { Sab3aMathService } from './../../services/sab3a-math.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pre-an-col',
  templateUrl: './pre-an-col.component.html',
  styleUrls: ['./pre-an-col.component.css']
})
export class PreAnColComponent implements OnInit {
param:string
matiere:string
alert:string
cycle:string
cours:Cours[]
coursFilter:Cours[]
cours1:Cours[]
controles:Controles[]
logged:boolean=false
coursPc
cousMath
CtrMath
CtrPc
  constructor( private authService:AuthentificationService,
    private router:Router,
    private route: ActivatedRoute ,
    private sab3aMathService:Sab3aMathService,
    private sab3aPcService:Sab3aPcService,
    private sab3aCtrPcService:Sab3aCtrPcService,
    private sab3aCtrMathService:Sab3aCtrMathService,
    private tamnaCtrMathService:TamnaCtrMathService,
    private tamnaCtrPcService:TamnaCtrPcService,
    private tamnaMathService:TamnaMathService,
    private tamnaPcService:TamnaPcService,
    private tas3aCtrMathService:Tas3aCtrMathService,
    private tas3aCtrPcService:Tas3aCtrPcService,
    private tas3aMathService:Tas3aMathService,
    private tas3aPcService:Tas3aPcService,
    )
    {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
    this.authService.getAuth().subscribe(auth => {if(auth) {this.logged=true}})
    this.params()
  }


  params() {
    this.param=this.route.snapshot.params['param']
    /// College
    if(this.param=="1AcMath") { 
      this.cousMath=this.sab3aMathService
      this.CtrMath=this.sab3aCtrMathService
      this.matiere="Mathématique"
      this.alert="1ère Année Collège"
      this.cycle="college"
      this.getAllMath(); }
    if(this.param=="1AcPc") { 
      this.coursPc=this.sab3aPcService
      this.CtrPc=this.sab3aCtrPcService
      this.matiere="Physique"
      this.alert="1ère Année Collège"
      this.cycle="college"
      this.getAllPc(); } 
////////////
      if(this.param=="2AcMath") { 
        this.cousMath=this.tamnaMathService
        this.CtrMath=this.tamnaCtrMathService
        this.matiere="Mathématique"
        this.alert="2ème Année Collège"
        this.cycle="college"
        this.getAllMath(); }
      if(this.param=="2AcPc") { 
        this.coursPc=this.tamnaPcService
        this.CtrPc=this.tamnaCtrPcService
        this.matiere="Physique"
        this.alert="2ème Année Collège"
        this.cycle="college"
        this.getAllPc(); }
////////////
        if(this.param=="3AcMath") { 
          this.cousMath=this.tas3aMathService
          this.CtrMath=this.tas3aCtrMathService
          this.matiere="Mathématique"
          this.alert="3ème Année Collège"
          this.cycle="college"
          this.getAllMath(); }
        if(this.param=="3AcPc") { 
          this.coursPc=this.tas3aPcService
          this.CtrPc=this.tas3aCtrPcService
          this.matiere="Physique"
          this.alert="3ème Année Collège"
          this.cycle="college"
          this.getAllPc(); }  
/// Lycee
if(this.param=="troncMath") { 
  this.matiere="Mathématique"
  this.alert="Tronc Commun"
  this.cycle="lycee" } 
  if(this.param=="troncPc") { 
    this.matiere="Physique"
    this.alert="Tronc Commun"
    this.cycle="lycee" } 
    ////////
if(this.param=="1BacMath") { 
  this.matiere="Mathématique"
  this.alert="1Bac Sience EX"
  this.cycle="lycee" } 
  if(this.param=="1BacPc") { 
    this.matiere="Physique"
    this.alert="1Bac Sience EX"
    this.cycle="lycee" } 
////////
if(this.param=="2BacMath") { 
  this.matiere="Mathématique"
  this.alert="2Bac Sience EX"
  this.cycle="lycee" } 
  if(this.param=="2BacPc") { 
    this.matiere="Physique"
    this.alert="2Bac Sience EX"
    this.cycle="lycee" } 
}


getAllPc() {
      this.coursPc.getCours().subscribe(res=> {
        this.coursFilter=res
        const varr = (a,b)=> a.num-b.num;
        this.cours=this.coursFilter.sort(varr);
        })
      this.CtrPc.getCours().subscribe(res=> {
        this.controles=res
           const varr = (a,b)=> a.num-b.num;
           this.controles.sort(varr);
          })
      }
 getAllMath() {
      this.cousMath.getCours().subscribe(res=> {
        this.coursFilter=res
        const varr = (a,b)=> a.num-b.num;
        this.cours=this.coursFilter.sort(varr);
        })
        this.CtrMath.getCours().subscribe(res=> {
          this.controles=res
           const varr = (a,b)=> a.num-b.num;
           this.controles.sort(varr);
          })
      }

  deleteCours(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        if(this.matiere=="Mathématique") {this.cousMath.deleteCours(id)}
        else if(this.matiere=="Physique") {this.coursPc.deleteCours(id)}
        Swal.fire({
          title:  'Deleted!',
          text:'Your file has been deleted.',
         icon:  'success',
         timer: 3000
        } 
        )
      }
    })
  }

  deleteCtr(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        if(this.matiere=="Mathématique") {this.CtrMath.deleteCours(id)}
        if(this.matiere=="Physique") {this.CtrPc.deleteCours(id)}
        Swal.fire({
          title:  'Deleted!',
          text:'Your file has been deleted.',
         icon:  'success',
         timer: 3000
        } 
        )
      }
    })
  }
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  search(data:string) {
 this.cours = (data) ? this.cours.filter(res=>  res.nom.toLowerCase().includes(data.toLowerCase()))  : this.coursFilter}
}
