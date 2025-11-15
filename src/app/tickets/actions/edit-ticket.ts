"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const editTicket = async (id: string, formData: FormData) => {
  const title = formData.get("title");
  const content = formData.get("content");

  await prisma.ticket.update({
    data: {
      title: title as string,
      content: content as string,
    },
    where: {
      id,
    },
  });

  revalidatePath(ticketsPath());

  redirect(ticketsPath());
};
