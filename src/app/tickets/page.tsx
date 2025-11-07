import Link from "next/link";

import { initialTickets } from "@/src/data";

const TicketsPage = () => {
    return (
        <div>
            <h2 className="text-lg">Tickets Page</h2>
            <br />
            <ul>
                {initialTickets.map(ticket => (
                   <> <li key={ticket.id}>
                        <h3>{ticket?.title}</h3>
                        <p>{ticket?.description}</p>
                    </li>
                    <Link href={`/tickets/${ticket.id}`} className="text-blue-500 underline">
                        View Ticket {ticket.id}
                    </Link>
                    <br />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default TicketsPage;