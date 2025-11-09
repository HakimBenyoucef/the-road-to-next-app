import { cloneElement } from "react";
import { LucideMessageSquareWarning } from "lucide-react";

type PlaceHolderProps = {
  label?: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, "svg">;
  button?: React.ReactElement<React.HTMLAttributes<HTMLDivElement>, "div">;
};

const PlaceHolder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceHolderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center">
      {cloneElement(icon, { className: "w-16 h-16" })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
};

export default PlaceHolder;
