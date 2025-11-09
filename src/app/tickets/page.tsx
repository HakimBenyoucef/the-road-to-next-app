import PageTemplate from "@/components/templates/page-template";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default TicketsPage;
