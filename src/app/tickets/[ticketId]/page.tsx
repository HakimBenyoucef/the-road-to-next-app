type TicketsPageProps = {
    params : Promise<{ ticketId: string }>;
}

import  {initialTickets} from '@/data';

const TicketsPage = async ({params} : TicketsPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);
    return (
        <div>
            {ticket ? (
                <div>
            <h2 className="text-lg">Tickets Page {ticketId}</h2>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                </div>
            ) : (
                <p>Ticket not found</p>
            )}
        </div>
    );
};

export default TicketsPage;