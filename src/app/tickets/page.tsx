import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PlaceHolder from "@/components/layout/placeholder";
import Spinner from "@/components/spinner";
import PageTemplate from "@/components/templates/page-template";
import TicketsList from "@/features/ticket/components/tickets-list";

const TicketsPage = () => {
  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <ErrorBoundary fallback={<PlaceHolder label="Failed to load tickets." />}>
        <Suspense fallback={<Spinner />}>
          <TicketsList />
        </Suspense>
      </ErrorBoundary>
    </PageTemplate>
  );
};

export default TicketsPage;
