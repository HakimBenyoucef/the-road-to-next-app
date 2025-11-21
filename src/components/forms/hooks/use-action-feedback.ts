import { useEffect, useRef } from "react";

import { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (args: OnArgs) => void;
  onError?: (args: OnArgs) => void;
};

export const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  // useRef conserve la valeur précédente entre les rendus, permettant de détecter
  // les changements de timestamp sans déclencher de re-rendu
  const prevTimestamp = useRef(actionState.timestamp);

  useEffect(() => {
    const isUpdate = prevTimestamp.current !== actionState.timestamp;
    if (!isUpdate) return;
    prevTimestamp.current = actionState.timestamp;
    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }
  }, [actionState, options]);
};
