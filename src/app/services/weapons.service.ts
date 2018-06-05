import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from '../models/weapon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  weaponsUrl = 'https://radiant-chamber-23229.herokuapp.com/api/weapons';
  constructor(public http: HttpClient) {}

  

  getWeapons() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    });
    return this.http.get(this.weaponsUrl, {headers});
  }
}
