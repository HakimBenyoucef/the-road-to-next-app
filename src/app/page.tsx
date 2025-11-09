import Link from "next/link";

import PageTemplate from "@/components/templates/page-template";
import { ticketPath } from "@/paths";

export default function Home() {
  return (
    <PageTemplate title="Home" description="Welcome to the Ticketing System">
      <Link href={ticketPath()} className="text-blue-500 underline">
        View Tickets
      </Link>
    </PageTemplate>
  );
}
