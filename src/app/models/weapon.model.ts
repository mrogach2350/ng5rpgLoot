export interface IWeapon {
    name: string;
    description: string;
    weight: string;
    price: string;
    proficiency: string;
    weaponClass: string;
    damageType: string;
    source: string;
    special: string;
    dmgT: string;
    dmgS: string;
    dmgM: string;
    dmgL: string;
    critical: string;
}

export class Weapon implements IWeapon {
    public name: string = null;
    public description: string = null;
    public weight: string = null;
    public price: string = null;
    public proficiency: string = null;
    public weaponClass: string = null;
    public damageType: string = null;
    public source: string = null;
    public special: string = null;
    public dmgT: string = null;
    public dmgS: string = null;
    public dmgM: string = null;
    public dmgL: string = null;
    public critical: string = null;

    constructor(weaponModel) {
        if (weaponModel) {
            for (const key in this) {
               if (weaponModel.hasOwnProperty(key)) {
                   this[key] = weaponModel[key];
               }
            }
        }
    }
}
