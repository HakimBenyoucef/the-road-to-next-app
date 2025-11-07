import Image from "next/image";
import Link from "next/link";

import { ticketPath } from "@/paths";

export default function Home() {
  return (
    <>
    <Link href={ticketPath()} className="text-blue-500 underline">
        View Tickets
      </Link>
    
    </>
  );
}
