type TicketsPageProps = {
    params : Promise<{ ticketId: string }>;
}

const TicketsPage = async ({params} : TicketsPageProps) => {
    const { ticketId } = await params;
    return <h2 className="text-lg">Tickets Page {ticketId}</h2>;
};

export default TicketsPage;