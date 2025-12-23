"use server";

import {
  formErrorToActionState,
  toActionState,
} from "@/components/forms/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

const updateTicketStatus = async (ticketId: string, status: TicketStatus) => {
  try {
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { status },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }

  revalidatePath(ticketsPath());
  return toActionState("SUCCESS", "Ticket status updated");
};

export { updateTicketStatus };
