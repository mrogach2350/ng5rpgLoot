import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { WeaponsService } from './services/weapons.service';
import { WeaponsComponent } from './weapons/weapons.component';
import { MessengerComponent } from './messages/messenger/messenger.component';


const appRoutes: Routes = [
  { path: 'weapons', component: WeaponsComponent},
  { path: 'chat', component: MessengerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    WeaponsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
