import Link from "next/link";

import PlaceHolder from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <PlaceHolder
      label="Ticket not found"
      button={
        <Button asChild variant={"outline"}>
          <Link href={ticketsPath()}>Go to tickets</Link>
        </Button>
      }
    />
  );
}
