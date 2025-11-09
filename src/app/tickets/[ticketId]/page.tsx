type TicketsPageProps = {
  params: Promise<{ ticketId: string }>;
};

import Link from "next/link";

import PlaceHolder from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
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
    <div>
      <h2 className="text-lg">Tickets Page {ticketId}</h2>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketsPage;
