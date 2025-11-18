"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { ticketDetailPath } from "@/paths";

const schema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: { message: string; payload?: FormData },
  formData: FormData
) => {
  try {
    const data = schema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });
    if (id) {
      await prisma.ticket.update({
        data,
        where: {
          id,
        },
      });
    } else {
      await prisma.ticket.create({
        data,
      });
    }
  } catch (error) {
    return { message: `Failed to upsert ticket : ${error}`, payload: formData };
  }

  revalidatePath(ticketsPath());

  if (id) {
    console.log(`Ticket updated with id: ${id}`);
    redirect(ticketDetailPath(id));
  }

  return { message: "Ticket created" };
};
