type TicketsPageProps = {
  params: Promise<{ ticketId: string }>;
};

import Link from "next/link";

import PlaceHolder from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";
import { ticketPath } from "@/paths";

const TicketsPage = async ({ params }: TicketsPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <PlaceHolder
        label="Ticket not found"
        button={
          <Button asChild variant={"outline"}>
            <Link href={ticketPath()}>Go to tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetailedView />
    </div>
  );
};

export default TicketsPage;
