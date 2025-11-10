import { Suspense } from "react";

import Spinner from "@/components/spinner";
import PageTemplate from "@/components/templates/page-template";
import TicketsList from "@/features/ticket/components/tickets-list";

const TicketsPage = () => {
  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <Suspense fallback={<Spinner />}>
        <TicketsList />
      </Suspense>
    </PageTemplate>
  );
};

export default TicketsPage;
