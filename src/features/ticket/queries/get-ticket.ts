import { initialTickets } from "@/data";

import { Ticket } from "../types";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  return new Promise<Ticket | null>((resolve) => {
    const ticket =
      initialTickets.find((ticket) => ticket.id === ticketId) || null;
    resolve(ticket);
  });
};
