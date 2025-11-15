import { Ticket } from "@prisma/client";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { editTicket } from "../actions/edit-ticket";

type TicketEditFormProps = {
  ticket: Ticket;
};

const TicketEditForm = async ({ ticket }: TicketEditFormProps) => {
  return (
    <form
      action={editTicket.bind(null, ticket.id)}
      className="flex flex-col gap-2"
    >
      <Input id="id" name="id" value={ticket.id} type="hidden" />
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" defaultValue={ticket.title} />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket.content} />
      <Button type="submit">Update</Button>
    </form>
  );
};

export { TicketEditForm };
