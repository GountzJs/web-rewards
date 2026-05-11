import { BorderEntity, type BorderProps } from "../api/entities/border.entity";

export class BorderMapperFrom {
  transform({ quantity, name, cover, isSpecial, createdAt }: BorderProps): BorderEntity {
    return new BorderEntity({ quantity, name, cover, isSpecial, createdAt });
  }
}
