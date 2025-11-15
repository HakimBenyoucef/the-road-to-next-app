import { notFound } from "next/navigation";

import { CardCompact } from "@/components/layout/card-compact";
import { getTicket } from "@/features/ticket/queries/get-ticket";

import { TicketEditForm } from "../../components/ticket-edit-form";

type EditTicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const EditTicketPage = async ({ params }: EditTicketPageProps) => {
  const resolvedParams = await params;
  console.log("resolvedParams:", resolvedParams);

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
      content={<TicketEditForm ticket={ticket} />}
    />
  );
};

export default EditTicketPage;
