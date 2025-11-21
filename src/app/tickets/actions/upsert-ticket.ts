"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/forms/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketDetailPath, ticketsPath } from "@/paths";

const schema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = schema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: data,
      create: data,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  if (id) {
    console.log(`Ticket updated with id: ${id}`);
    redirect(ticketDetailPath(id));
  }

  return toActionState("SUCCESS", "Ticket created");
};
