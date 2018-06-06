export interface IWeapon {
    Name: string;
    Cost_Number: number;
    Cost_Denom: string;
    DMG_S_Number: number;
    DMG_S_Dice: string;
    DMG_M_Number: number;
    DMG_M_Dice: string;
    Critical: number;
    Crit_Range: string;
    Range: number;
    Weight: number;
    Type: string;
    Special: string;
    Masterwork: boolean;
}

export class Weapon implements IWeapon {
    public Name: string;
    public Cost_Number: number;
    public Cost_Denom: string;
    public DMG_S_Number: number;
    public DMG_S_Dice: string;
    public DMG_M_Number: number;
    public DMG_M_Dice: string;
    public Critical: number;
    public Crit_Range: string;
    public Range: number;
    public Weight: number;
    public Type: string;
    public Special: string;
    public Masterwork: boolean;

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
