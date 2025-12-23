import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  LucideMoreVertical,
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { editTicketPath, ticketDetailPath } from "@/paths";

import { TICKET_ICONS } from "../constants";
import { toCurrencyFromCent } from "@/utils/to-currency-from-cent";
import { TicketMoreMenu } from "./ticket-more-menu";

type TicketItemProps = {
  ticket: Ticket;
  isDetailedView?: boolean;
};
const TicketItem = ({ ticket, isDetailedView }: TicketItemProps) => {
  const detailsButton = (
    <Button variant="outline" asChild size="icon">
      <Link
        href={ticketDetailPath(ticket.id)}
        className="text-blue-500 underline text-sm"
      >
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" asChild size="icon">
      <Link
        href={editTicketPath(ticket.id)}
        className="text-blue-500 underline text-sm"
      >
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  // const deleteButton = (
  //   <form action={deleteTicket.bind(null, ticket.id)}>
  //     <Button variant="outline" size="icon">
  //       <LucideTrash className="h-4 w-4" />
  //     </Button>
  //   </form>
  // );

  const moreMenu = (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button size={"icon"} variant={"outline"}>
          <LucideMoreVertical className="h-4 w-4" />
        </Button>
      }
    />
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
            {ticket.content}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            Bounty: {toCurrencyFromCent(ticket.bounty)}
          </p>
          <p className="text-sm text-muted-foreground">
            Deadline: {ticket.deadline}
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-y-2">
        {!isDetailedView && detailsButton}
        {editButton}
        {moreMenu}
      </div>
    </div>
  );
};
export default TicketItem;
