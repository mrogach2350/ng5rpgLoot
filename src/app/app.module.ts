import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { WeaponsService } from './services/weapons.service';
import { HttpClientModule } from '@angular/common/http';
import { WeaponsComponent } from './weapons/weapons.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    WeaponsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
