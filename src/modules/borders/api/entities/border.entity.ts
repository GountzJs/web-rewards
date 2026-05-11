import { Rank } from "../enums/rank.enum";

export interface BorderProps {
  quantity: number;
  name: string;
  cover: string;
  isSpecial: boolean;
  createdAt: string;
}

export class BorderEntity {
  private _quantity: number;
  private _name: string;
  private _cover: string;
  private _isSpecial: boolean;
  private _createdAt: Date;
  private _rank: Rank;

  constructor({ quantity, name, cover, isSpecial, createdAt }: BorderProps) {
    this._quantity = quantity;
    if (this.quantity === 0 || !this.quantity)
      throw new Error("Operación inválida: La cantidad de bordes es inválida");

    this._name = name;
    this._cover = cover;
    this._isSpecial = isSpecial;
    this._createdAt = new Date(createdAt);
    this._rank = this.formatRank();
  }

  private formatRank(): Rank {
    if (this.isSpecial || this.quantity >= 7) {
      return Rank.Challenger;
    }
    if (this.quantity === 6) {
      return Rank.Master;
    }
    if (this.quantity === 5) {
      return Rank.Diamond;
    }
    if (this.quantity === 4) {
      return Rank.Platinum;
    }
    if (this.quantity === 3) {
      return Rank.Gold;
    }
    if (this.quantity === 2) {
      return Rank.Silver;
    }
    return Rank.Bronze;
  }

  getLower(): string {
    return this._rank.toLowerCase();
  }

  get quantity(): number {
    return this._quantity;
  }

  get name(): string {
    return this._name;
  }

  get cover(): string {
    return this._cover;
  }

  get isSpecial(): boolean {
    return this._isSpecial;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get rank(): Rank {
    return this._rank;
  }
}
