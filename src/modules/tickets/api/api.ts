import { apiUrl } from "@/core/settings";
import type { TicketEntity } from "./entities/ticket.entity";

export const getFollowing = async (username: string) => {
  const response = await fetch(`${apiUrl}/v1/accounts/twitch/following/${username}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Failed to fetch tickets");

  return data;
};

export const getTickets = async (id: string): Promise<TicketEntity[]> => {
  const response = await fetch(`${apiUrl}/v1/tickets/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Failed to fetch tickets");

  return data.tickets;
};
