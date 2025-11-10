type TicketsPageProps = {
  params: Promise<{ ticketId: string }>;
};

import Link from "next/link";

import PlaceHolder from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketPath } from "@/paths";

const TicketPage = async ({ params }: TicketsPageProps) => {
  const ticket = await getTicket((await params).ticketId);

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

export default TicketPage;
