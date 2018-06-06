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

  ngOnInit() {
    this.weaponsService.getWeapons().subscribe(weapons => {
      console.log(weapons[0]);
      this.weapons = weapons;
    });
  }

}
