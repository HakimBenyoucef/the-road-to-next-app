"use client";
import PlaceHolder from "@/components/layout/placeholder";

export default function Error({ error }: { error: Error }) {
  return <PlaceHolder label={error.message} />;
}
