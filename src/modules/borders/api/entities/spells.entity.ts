import type { Spell } from "../enums/spell.enum";

interface Props {
  left: Spell;
  right: Spell;
}

export class SpellsEntity {
  private _left: Spell;
  private _right: Spell;

  constructor({ left, right }: Props) {
    if (left === right) {
      throw new Error("Operación inválida: Los spells no pueden ser iguales");
    }
    this._left = left;
    this._right = right;
  }

  getLeftLower(): string {
    return this._left.toLowerCase();
  }

  getRightLower(): string {
    return this._right.toLowerCase();
  }

  get left(): Spell {
    return this._left;
  }

  get right(): Spell {
    return this._right;
  }
}
