import { Tas3aMathService } from './../../services/tas3a-math.service';
import { Tas3aPcService } from './../../services/tas3a-pc.service';
import { TamnaPcService } from './../../services/tamna-pc.service';
import { TamnaMathService } from './../../services/tamna-math.service';
import { Sab3aPcService } from './../../services/sab3a-pc.service';
import { Sab3aMathService } from './../../services/sab3a-math.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  param: string
  cours:Cours = {
    num:"",
    nom: "",
    linkCours:"",
    linkExercices:"",
    linkCorrectionExercices:"",
  }
  cousMath
  cousPc
  matiere:string
  constructor(private route: ActivatedRoute,
    private sab3aPcService:Sab3aPcService,
    private sab3aMathService:Sab3aMathService, 
    private tamnaPcService:TamnaPcService,
    private tamnaMathService:TamnaMathService, 
    private tas3aPcService:Tas3aPcService,
    private tas3aMathService:Tas3aMathService, 
    private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
    this.params()
  }

  params() {
    this.param=this.route.snapshot.params['param']
    if(this.param=="1AcMath") {this.cousMath=this.sab3aMathService;this.matiere="Mathématique"}
    if(this.param=="1AcPc") {this.cousPc=this.sab3aPcService;this.matiere="Physique"}
    if(this.param=="2AcMath") {this.cousMath=this.tamnaMathService;this.matiere="Mathématique"}
    if(this.param=="2AcPc") {this.cousPc=this.tamnaPcService;this.matiere="Physique"}
    if(this.param=="3AcMath") {this.cousMath=this.tas3aMathService;this.matiere="Mathématique"}
    if(this.param=="3AcPc") {this.cousPc=this.tas3aPcService;this.matiere="Physique"}
}





  addCours() { 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!'
    }).then((result) => {
      if (result.value) {
        if(this.matiere=="Mathématique") this.cousMath.addCours(this.cours)
        else if(this.matiere=="Physique") this.cousPc.addCours(this.cours)
        this.router.navigateByUrl('/source/'+this.param)
        // this.router.navigateByUrl(`/source/${this.param}`)
         Swal.fire({
          title:  'addet!',
          text:'Your file has been addet.',
         icon:  'success',
         timer: 3000
        })}
      })
}}