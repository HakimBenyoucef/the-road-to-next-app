import { notFound } from "next/navigation";

import { CardCompact } from "@/components/layout/card-compact";
import { getTicket } from "@/features/ticket/queries/get-ticket";

import { TicketUpsertForm } from "../../components/ticket-upsert-form";

type EditTicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const EditTicketPage = async ({ params }: EditTicketPageProps) => {
  const resolvedParams = await params;

  const { ticketId } = await resolvedParams;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <CardCompact
      className="w-full max-w-[420px] self-center"
      title="Edit ticket "
      description={`Your are editing ticket ${ticketId}`}
      content={<TicketUpsertForm ticket={ticket} />}
    />
  );
};

export default EditTicketPage;
