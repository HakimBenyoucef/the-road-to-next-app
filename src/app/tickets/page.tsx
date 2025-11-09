import { useEffect, useState } from "react";

import PageTemplate from "@/components/templates/page-template";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";

const TicketsPage = async () => {
  const tickets: Ticket[] = await getTickets();

  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default TicketsPage;
