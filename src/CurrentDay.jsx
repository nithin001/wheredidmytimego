import React from "react";
import Hour from "./Hour";
import moment from "moment/moment";

function CurrentDay({ date, coord, color }) {
  const formattedDate = moment(date).format("i-MMM-DD-YYYY");
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    hours.push(i);
  }

  return (
    <div className="flex flex-wrap mx-auto justify-center mt-2">
      {hours.map((hour) => {
        const id = `${formattedDate}-${hour}`;
        return <Hour key={id} id={id} coord={coord} color={color} />;
      })}
    </div>
  );
}

export default CurrentDay;
