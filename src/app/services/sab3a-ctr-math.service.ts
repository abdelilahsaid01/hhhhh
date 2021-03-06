import { AngularFirestore } from 'angularfire2/firestore';
import { CoursService } from './cours.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Sab3aCtrMathService extends CoursService {

  constructor(afs: AngularFirestore) {
    super(afs, "controles1AcMath");
  }
}
