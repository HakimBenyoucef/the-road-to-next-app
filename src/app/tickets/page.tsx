import Link from "next/link";

import { initialTickets } from "@/data";
import { ticketDetailPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: "🟢",
  DONE: "🔴",
  IN_PROGRESS: "🟡",
};

const TicketsPage = () => {
  return (
    <div>
      <h2 className="text-lg">Tickets Page</h2>
      <br />
      <ul>
        {initialTickets.map((ticket) => (
          <div key={ticket.id}>
            <span>{TICKET_ICONS[ticket.status]} </span>
            <li>
              <h3>{ticket?.title}</h3>
              <p>{ticket?.description}</p>
            </li>
            <Link
              href={ticketDetailPath(ticket.id)}
              className="text-blue-500 underline"
            >
              View Ticket {ticket.id}
            </Link>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
