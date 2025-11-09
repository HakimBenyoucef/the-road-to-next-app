import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketDetailPath } from "@/paths";

import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
  ticket: Ticket;
  isDetailedView?: boolean;
};

const TicketItem = ({ ticket, isDetailedView }: TicketItemProps) => {
  console.log("Where am I rendered? TicketItem");

  const detailsButton = (
    <Button variant="outline" asChild>
      <Link
        href={ticketDetailPath(ticket.id)}
        className="text-blue-500 underline text-sm"
      >
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex  gap-x-1", {
        "max-w-[420px]": !isDetailedView,
        "max-w-[580px]": isDetailedView,
      })}
    >
      <Card key={ticket.id} className="w-full ">
        {" "}
        {/* ← p-0 pour supprimer le padding */}
        <CardHeader className="flex flex-row items-center gap-2 px-4 pt-4 pb-2">
          <span className="text-lg">{TICKET_ICONS[ticket.status]}</span>
          <CardTitle className="text-lg font-semibold truncate">
            {ticket.title}
          </CardTitle>
        </CardHeader>
        <CardContent
          className={clsx(" px-4 py-0", {
            "opacity-60": ticket.status === "DONE",
          })}
        >
          <CardDescription
            className={clsx(" text-sm", {
              "line-through": ticket.status === "DONE",
              "line-clamp-3": !isDetailedView,
            })}
          >
            {ticket.description}
          </CardDescription>
        </CardContent>
      </Card>
      {!isDetailedView && (
        <div className="flex flex-col justify-between">{detailsButton}</div>
      )}
    </div>
  );
};
export default TicketItem;
