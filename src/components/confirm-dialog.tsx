import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { ActionState } from "./forms/utils/to-action-state";
import { AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { cloneElement, useState } from "react";

type UseConfirmDialogProps = {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: React.ReactElement<any>;
};

const useConfirmDialog = ({
  title = "Are you sure?",
  description = "This action cannot be undone. This will permanently delete your ticket.",
  action,
  trigger,
}: UseConfirmDialogProps) => {
  const [open, setOpen] = useState(false);
  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setOpen((state) => !state),
  });
  const dialog = (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <form action={action}>
              <Button type="submit">Confirm</Button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
