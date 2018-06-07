import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { WeaponsService } from './services/weapons.service';
import { Weapon } from './models/weapon.model';

export interface DataObject {
  name: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // private dataCollection: AngularFirestoreCollection<DataObject>;
  // data: Observable<any[]>;
  // newDataObject: DataObject = {
  //   name: 'Mikey\'s new data object',
  //   text: 'This is a some dummy text doing stuff'
  // };
  // weapons: Weapon[];
  // constructor(public db: AngularFirestore) {
  //   this.data = db.collection('data').valueChanges();
  //   this.dataCollection = db.collection<DataObject>('data');
  // }

  ngOnInit() {
    console.log('Component Loaded');
  }

//   buttonAddDataObject() {
//     this.addDataObject(this.newDataObject);
//   }

//   addDataObject(dataObject: DataObject) {
//     this.dataCollection.add(dataObject);
//   }
}
