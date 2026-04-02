import { apiUrl } from "@/core/settings";
import type { RankingResponseDTO } from "./dtos/ranking-res.dto";
import type { UserProfileEntity } from "./entities/user-profile.entity";

export const getRanking = async (): Promise<RankingResponseDTO> => {
  const response = await fetch(apiUrl + "/v1/accounts/ranking", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data.ranking;
};

export const getProfile = async (username: string): Promise<UserProfileEntity> => {
  const response = await fetch(apiUrl + `/v1/accounts/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message);

  return data;
};
