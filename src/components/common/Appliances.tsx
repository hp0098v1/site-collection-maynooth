import { useState } from "react";

import { APPLIANCES } from "@/constants";

const BORDERED_SELECT_CLASSES = "text-primary border-b border-primary";
const BG_FILLED_CLASSES = "text-background bg-primary";

type Props = {
  isBordered?: boolean;
  className?: string;
};

const Appliances = ({ className, isBordered = true }: Props) => {
  const [selectedAppliance, setSelectedAppliance] = useState(APPLIANCES[0]);

  return (
    <div
      className={`flex justify-between items-center max-w-xl mt-6 ${className}`}
    >
      {APPLIANCES.map((a) => (
        <p
          key={a}
          onClick={() => setSelectedAppliance(a)}
          className={`cursor-pointer text-center py-0.5 px-2 ${
            selectedAppliance === a
              ? isBordered
                ? BORDERED_SELECT_CLASSES
                : BG_FILLED_CLASSES
              : ""
          }`}
        >
          {a}
        </p>
      ))}
    </div>
  );
};

export default Appliances;
