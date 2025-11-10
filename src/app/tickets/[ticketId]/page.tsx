type TicketsPageProps = {
  params: Promise<{ ticketId: string }>;
};

import { notFound } from "next/navigation";

import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

const TicketPage = async ({ params }: TicketsPageProps) => {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetailedView />
    </div>
  );
};

export default TicketPage;
