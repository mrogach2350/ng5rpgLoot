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

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.weaponsUrl);
  }

  getWeaponById(id): Observable<Weapon> {
    return this.http.get<Weapon>(`${this.weaponsUrl}/${id}`);
  }

  createWeapon(weapon): Observable<Weapon> {
    return this.http.post<Weapon>(this.weaponsUrl, weapon);
  }
}
