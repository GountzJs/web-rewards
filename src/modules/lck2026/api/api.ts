import { apiUrl } from "@/core/settings";
import type { CardEntity } from "./entities/card.entity";

export const getCards = async (id: string): Promise<CardEntity[]> => {
  const response = await fetch(`${apiUrl}/v1/lck2026/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Failed to fetch tickets");

  return data.cards;
};
