import { initialTickets } from "@/data";

import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

  return new Promise<Ticket[]>((resolve) => {
    resolve(initialTickets);
  });
};
