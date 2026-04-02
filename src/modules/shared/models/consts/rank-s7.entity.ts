export const rankS7 = {
  challenger: "CHALLENGER",
  master: "MASTER",
  diamond: "DIAMOND",
  platinum: "PLATINUM",
  gold: "GOLD",
  silver: "SILVER",
  bronze: "BRONZE",
  unranked: "UNRANKED",
} as const;

export type TRankS7 = (typeof rankS7)[keyof typeof rankS7];
