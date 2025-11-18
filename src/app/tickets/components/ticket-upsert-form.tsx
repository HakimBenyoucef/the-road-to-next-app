"use client";

import { useActionState } from "react";
import { Ticket } from "@prisma/client";

import { SubmitButton } from "@/components/forms/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket: Ticket | undefined;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, formAction] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "" }
  );
  return (
    <form action={formAction} className="flex flex-col gap-2">
      <Input id="id" name="id" value={ticket?.id} type="hidden" />
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <SubmitButton label={ticket ? "Update" : "Create"} />
      {actionState.message && <p>{actionState.message}</p>}
    </form>
  );
};

export { TicketUpsertForm };
