import React from "react";
import { StopIcon } from "@heroicons/react/24/solid";

function Colors({ colors, setColor, color }) {
  return (
    <div className="flex flex-wrap mx-auto justify-center mt-2">
      {colors.map((currentColor) => {
        const outline = currentColor === color ? "outline outline-2" : "";
        return (
          <button
            key={currentColor}
            className={`text-white font-bold rounded ${outline}`}
            onClick={() => {
              setColor(currentColor);
            }}
          >
            <StopIcon
              className={`h-8 w-8 md:h-16 md:w-16 m-1 md:m-3 text-${currentColor}-500 ${outline}`}
            />
          </button>
        );
      })}
    </div>
  );
}

export default Colors;
