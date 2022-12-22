import React, { useEffect, useRef } from "react";
import { StopIcon } from "@heroicons/react/24/outline";
import { StopIcon as SolidStopIcon } from "@heroicons/react/24/solid";
import useLocalStorage from "./useLocalStorage";

const isHourHovered = (hour, x, y) => {
  if (hour.left < x && hour.right > x && hour.top < y && hour.bottom > y) {
    return true;
  }
  return false;
};

function Hour({ id, coord, color }) {
  const [selected, setSelected] = useLocalStorage(id, false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && coord.x && coord.y) {
      if (
        isHourHovered(ref.current.getBoundingClientRect(), coord.x, coord.y)
      ) {
        setSelected(color);
      }
    }
  }, [coord.x, coord.y, id, setSelected, color]);

  return (
    <div ref={ref}>
      {selected ? (
        <SolidStopIcon className={`h-12 w-12 md:h-16 md:w-16 m-1 md:m-3 text-${selected}-500`} />
      ) : (
        <StopIcon className="h-12 w-12 md:h-16 md:w-16 m-1 md:m-3" />
      )}
    </div>
  );
}

export default Hour;
