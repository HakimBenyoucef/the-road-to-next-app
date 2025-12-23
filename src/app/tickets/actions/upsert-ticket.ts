"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { setCookie } from "@/actions/cookies";
import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/forms/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketDetailPath, ticketsPath } from "@/paths";
import { toCent } from "@/utils/to-currency-from-cent";

const schema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  bounty: z.coerce.number().positive(),
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
      deadline: formData.get("deadline"),
      bounty: Number(formData.get("bounty")),
    });

    const dbData = {
      ...data,
      bounty: toCent(data.bounty),
    };

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: dbData,
      create: dbData,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  if (id) {
    await setCookie("toast", "Ticket updated successfully");
    redirect(ticketDetailPath(id));
  }

  return toActionState("SUCCESS", "Ticket created");
};
