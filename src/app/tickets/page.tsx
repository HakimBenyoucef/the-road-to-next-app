import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import PlaceHolder from "@/components/layout/placeholder";
import { RedirectToast } from "@/components/redirect-toast";
import Spinner from "@/components/spinner";
import PageTemplate from "@/components/templates/page-template";
import TicketsList from "@/features/ticket/components/tickets-list";

import { TicketCreateCard } from "./components/ticket-create-card";

export const dynamic = "force-dynamic";

const TicketsPage = () => {
  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <ErrorBoundary fallback={<PlaceHolder label="Failed to load tickets." />}>
        <Suspense fallback={<Spinner />}>
          <TicketCreateCard />
          <TicketsList />
        </Suspense>
      </ErrorBoundary>
      <RedirectToast />
    </PageTemplate>
  );
};

export default TicketsPage;
