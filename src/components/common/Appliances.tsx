import { useState } from "react";

import { APPLIANCES } from "@/constants";

const Appliances = () => {
  const [selectedAppliance, setSelectedAppliance] = useState(APPLIANCES[0]);

  return (
    <div className="flex items-center gap-4 sm:gap-20  mt-6">
      {APPLIANCES.map((a) => (
        <p
          key={a}
          onClick={() => setSelectedAppliance(a)}
          className={`cursor-pointer ${
            selectedAppliance === a
              ? "text-primary border-b border-primary"
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
