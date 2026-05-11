import { apiUrl } from "@/core/settings";

interface Props {
  id: string;
  page: number;
}

export const getBorders = async ({ id, page }: Props) => {
  const queryParams: any = {};
  if (page) {
    queryParams.page = page;
  }
  const response = await fetch(
    `${apiUrl}/v1/borders/users/${id}?${new URLSearchParams(queryParams).toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Failed to fetch borders");

  return data;
};
