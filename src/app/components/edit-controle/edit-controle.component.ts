import { Tas3aCtrPcService } from './../../services/tas3a-ctr-pc.service';
import { Tas3aCtrMathService } from './../../services/tas3a-ctr-math.service';
import { TamnaCtrPcService } from './../../services/tamna-ctr-pc.service';
import { TamnaCtrMathService } from './../../services/tamna-ctr-math.service';
import { Sab3aCtrPcService } from './../../services/sab3a-ctr-pc.service';
import { Sab3aCtrMathService } from './../../services/sab3a-ctr-math.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Controles } from './../../models/controles';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-controle',
  templateUrl: './edit-controle.component.html',
  styleUrls: ['./edit-controle.component.css']
})
export class EditControleComponent implements OnInit {
  controle:Controles
    id:string
    param: string
    matiere:string
    ctrMath
    ctrPc
    constructor(private route: ActivatedRoute,
      private sab3aCtrPcService:Sab3aCtrPcService, 
      private router:Router,
      private sab3aCtrMathService:Sab3aCtrMathService,
      private tamnaCtrMathService:TamnaCtrMathService,
      private tamnaCtrPcService:TamnaCtrPcService,
      private tas3aCtrMathService:Tas3aCtrMathService,
      private tas3aCtrPcService:Tas3aCtrPcService,
      )
 { }
  
    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {return false;};
     this.params()
    }
  
    getCtrMath() {
      this.ctrMath.getCoursById(this.id).subscribe(res=> {
        this.controle=res
      })}
  
      getCtrPc() {
        this.ctrPc.getCoursById(this.id).subscribe(res=> {
          this.controle=res
        })}
  
  
updateCtr() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, update it!'
  }).then((result) => {
    if (result.value) {
      this.controle.id=this.id
      if(this.matiere=="Mathématique") this.ctrMath.updateCours(this.controle)
      else if(this.matiere=="Physique") this.ctrPc.updateCours(this.controle)
      this.router.navigateByUrl('/source/'+this.param)
       Swal.fire({
        title:  'Updated!',
        text:'Your file has been updated.',
       icon:  'success',
       timer: 3000
      })}
    })
  }
  
  
  
  params() {
    this.id=this.route.snapshot.params['id'] 
   this.param=this.route.snapshot.params['param']
/////////
    if(this.param=="1AcMath") {this.ctrMath=this.sab3aCtrMathService;this.getCtrMath(); this.matiere="Mathématique"}
    if(this.param=="1AcPc") { this.ctrPc=this.sab3aCtrPcService;this.getCtrPc(); this.matiere="Physique"} 
////////////
      if(this.param=="2AcMath") {this.ctrMath=this.tamnaCtrMathService;this.getCtrMath();this.matiere="Mathématique" }
      if(this.param=="2AcPc") {this.ctrPc=this.tamnaCtrPcService;this.getCtrPc();this.matiere="Physique" }
////////////
        if(this.param=="3AcMath") { this.ctrMath=this.tas3aCtrMathService;this.getCtrMath();this.matiere="Mathématique" }
        if(this.param=="3AcPc") {this.ctrPc=this.tas3aCtrPcService;this.getCtrPc(); this.matiere="Physique"}  
}

      
  
    
  }
  