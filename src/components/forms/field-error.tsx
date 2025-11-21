import { ActionState } from "./utils/to-action-state";

type FieldErrorProps = {
  acitonState: ActionState;
  fieldName: string;
};

const FieldError = ({ acitonState, fieldName }: FieldErrorProps) => {
  const message = acitonState.fieldErrors?.[fieldName]?.[0];
  if (!message) {
    return null;
  }
  return <span className="text-xs text-red-500">{message}</span>;
};

export default FieldError;
