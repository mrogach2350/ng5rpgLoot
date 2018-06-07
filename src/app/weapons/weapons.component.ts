import { Component, OnInit } from '@angular/core';
import { Weapon } from '../models/weapon.model';
import { WeaponsService } from '../services/weapons.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  weapons: Weapon[];
  constructor(public weaponsService: WeaponsService) { }

  displayWeaponDetail = false;
  weaponDetail: Weapon = new Weapon(null);
  ngOnInit() {
    this.weaponsService.getWeapons().subscribe(weapons => {
      this.weapons = weapons;
    });
  }

  getWeapon(id) {
    this.weaponsService.getWeaponById(id).subscribe(weapon => {
      this.weaponDetail = weapon;
    });
    this.displayWeaponDetail = true;
  }

}
