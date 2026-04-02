import { rankS7, type TRankS7 } from "@/modules/shared/models/consts/rank-s7.entity";
import type { RankingResponseDTO } from "../dtos/ranking-res.dto";
import type { UserRankingEntity } from "../entities/user-ranking.entity";

const getRank = (idx: number): TRankS7 => {
  switch (idx) {
    case 0:
      return rankS7.challenger;
    case 1:
      return rankS7.master;
    case 2:
      return rankS7.diamond;
    case 3:
      return rankS7.platinum;
    case 4:
      return rankS7.gold;
    case 5:
      return rankS7.silver;
    case 6:
      return rankS7.bronze;
    default:
      return rankS7.unranked;
  }
};

export const rankingAdapter = (response: RankingResponseDTO): UserRankingEntity[] => {
  return response.map((user, idx) => ({
    id: user.id,
    username: user.username,
    total: {
      borders: user.total.borders,
      cards: user.total.cards,
    },
    rank: getRank(idx),
  }));
};
