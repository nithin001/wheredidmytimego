import React, { useEffect, useRef } from "react";
import { StopIcon as SolidStopIcon } from "@heroicons/react/24/solid";
import useLocalStorage from "./useLocalStorage";
import moment from "moment";

const isHourHovered = (hour, x, y) => {
  if (hour.left < x && hour.right > x && hour.top < y && hour.bottom > y) {
    return true;
  }
  return false;
};

function Hour({ id, coord, color, hour }) {
  const [selected, setSelected] = useLocalStorage(id, "gray");
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

  const number = moment(hour, ["HH"]).format("hh");

  return (
    <div className="flex flex-col items-center m-1 md:m-3" ref={ref}>
      <span className="text-xs text-gray-400">{number}</span>
      <SolidStopIcon
        className={`h-12 w-12 md:h-16 md:w-16 text-${selected}-300`}
      />
    </div>
  );
}

export default Hour;
