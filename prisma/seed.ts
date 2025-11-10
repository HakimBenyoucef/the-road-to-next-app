import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    id: "1",
    title: "Ticket One",
    content: "This is the first ticket.",
    status: "OPEN" as const,
  },
  {
    id: "2",
    title: "Ticket Two",
    content: "This is the second ticket.",
    status: "DONE" as const,
  },
  {
    id: "3",
    title: "Ticket Three",
    content: "This is the third ticket.",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
