"use client";

import { useActionState, useRef } from "react";
import { Ticket } from "@prisma/client";

import FieldError from "@/components/forms/field-error";
import Form from "@/components/forms/form";
import { SubmitButton } from "@/components/forms/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsert-ticket";
import { toCurrencyFromCent } from "@/utils/to-currency-from-cent";
import {
  DatePicker,
  ImperativeHandleFromDatePicker,
} from "@/components/date-picker";

type TicketUpsertFormProps = {
  ticket: Ticket | undefined;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, formAction] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "", fieldErrors: {} }
  );

  const datePickerImperativeHandleRef =
    useRef<ImperativeHandleFromDatePicker>(null);

  const handleSuccess = () => {
    datePickerImperativeHandleRef.current?.reset();
  };

  return (
    <Form
      action={formAction}
      actionState={actionState}
      onSuccess={handleSuccess}
    >
      <Input id="id" name="id" value={ticket?.id} type="hidden" />
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError acitonState={actionState} fieldName="title" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError acitonState={actionState} fieldName="content" />
      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          {/* <Input
            id="deadline"
            name="deadline"
            type="date"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          /> */}
          <DatePicker
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
            imperativeHandleRef={datePickerImperativeHandleRef}
          />
          <FieldError acitonState={actionState} fieldName="deadline" />
        </div>
        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            id="bounty"
            name="bounty"
            type="number"
            step="0.01"
            defaultValue={
              (actionState.payload?.get("bounty") as string) ??
              (ticket?.bounty ? toCurrencyFromCent(ticket.bounty) : "")
            }
          />
          <FieldError acitonState={actionState} fieldName="bounty" />
        </div>
      </div>
      <SubmitButton label={ticket ? "Update" : "Create"} />
    </Form>
  );
};

export { TicketUpsertForm };
