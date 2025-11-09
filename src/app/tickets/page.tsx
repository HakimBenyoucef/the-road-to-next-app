import clsx from "clsx";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";

import PageTemplate from "@/components/templates/page-template";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketDetailPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  DONE: <LucideCircleCheck />,
  IN_PROGRESS: <LucidePencil />,
};

const TicketsPage = () => {
  return (
    <PageTemplate
      title="Tickets"
      description="Here you can find all your tickets."
    >
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px] p-0">
            {" "}
            {/* ← p-0 pour supprimer le padding */}
            <CardHeader className="flex flex-row items-center gap-2 px-4 pt-4 pb-2">
              <span className="text-lg">{TICKET_ICONS[ticket.status]}</span>
              <CardTitle className="text-lg font-semibold truncate">
                {ticket.title}
              </CardTitle>
            </CardHeader>
            <CardContent
              className={clsx("px-4 py-0", {
                "opacity-60": ticket.status === "DONE",
              })}
            >
              <CardDescription
                className={clsx("text-sm truncate", {
                  "line-through": ticket.status === "DONE",
                })}
              >
                {ticket.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="px-4 pt-2 pb-4">
              <Link
                href={ticketDetailPath(ticket.id)}
                className="text-blue-500 underline text-sm"
              >
                View Ticket {ticket.id}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
};

export default TicketsPage;
