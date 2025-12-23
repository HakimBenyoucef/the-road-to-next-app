"use client";

import * as React from "react";
import { ChevronDownIcon, LucideCalendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useImperativeHandle } from "react";
import { format } from "date-fns";

export type ImperativeHandleFromDatePicker = {
  reset: () => void;
};

type DatePickerProps = {
  id: string;
  name?: string;
  defaultValue?: string | undefined;
  imperativeHandleRef?: React.RefObject<ImperativeHandleFromDatePicker | null>;
};
export function DatePicker({
  id,
  name,
  defaultValue,
  imperativeHandleRef,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  );

  const formattedDate = date ? format(date, "yyyy-MM-dd") : "";

  useImperativeHandle(imperativeHandleRef, () => ({
    reset: () => {
      setDate(new Date());
    },
  }));

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger id={id} asChild>
          <Button
            variant="outline"
            className="w-48 justify-start text-left font-normal"
          >
            <LucideCalendar className="mr-2 h-4 w-4" />
            {formattedDate || "Select date"}
            <input type="hidden" name={name} value={formattedDate} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
