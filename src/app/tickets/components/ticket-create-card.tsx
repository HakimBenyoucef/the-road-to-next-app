import { CardCompact } from "@/components/layout/card-compact";

import { TicketCreateForm } from "./ticket-create-form";

const TicketCreateCard = () => {
  return (
    <CardCompact
      className="w-full max-w-[420px] self-center"
      title="Create a new ticket"
      description="A new ticket will be created"
      content={<TicketCreateForm />}
    />
  );
};

export { TicketCreateCard };
