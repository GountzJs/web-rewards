import type { TRankS7 } from "@/modules/shared/models/consts/rank-s7.entity";

export type UserRankingEntity = {
  id: string;
  username: string;
  rank?: TRankS7;
  total: {
    borders: number;
    cards: number;
  };
};
