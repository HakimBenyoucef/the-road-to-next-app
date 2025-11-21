import { z, ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors?: Record<string, string[] | undefined>;
  timestamp?: number;
};

export const formErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  let message = "Failed to upsert ticket";
  let fieldErrors: Record<string, string[]> = {};

  if (error instanceof ZodError) {
    message = error.issues[0].message;
    fieldErrors = z.flattenError(error).fieldErrors;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return {
    message,
    payload: formData,
    fieldErrors,
    status: "ERROR",
    timestamp: Date.now(),
  };
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
};
