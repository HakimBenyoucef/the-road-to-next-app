import Link from "next/link";

import PageTemplate from "@/components/templates/page-template";
import { ticketsPath } from "@/paths";

export default function Home() {
  return (
    <PageTemplate title="Home" description="Welcome to the Ticketing System">
      <Link href={ticketsPath()} className="text-blue-500 underline">
        View Tickets
      </Link>
    </PageTemplate>
  );
}
