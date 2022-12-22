import React, { forwardRef } from "react";
import moment from "moment";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ChooseDate({ date, setDate }) {
  const momentDate = moment(date);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="bg-rose-300 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  return (
    <div className="w-full p-4 flex items-center justify-between">
      <div>
        <button
          onClick={() => {
            setDate(momentDate.subtract(1, "days").toDate());
          }}
          className="bg-rose-300 text-white font-bold py-2 px-4 rounded"
        >
          <ArrowLongLeftIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div>
        <DatePicker
          dateFormat="MMM dd"
          todayButton="Today"
          selected={date}
          onChange={(date) => setDate(date)}
          customInput={<ExampleCustomInput />}
          showPopperArrow={false}
          popperPlacement="bottom"
        />
      </div>
      <div>
        <button
          onClick={() => {
            setDate(momentDate.add(1, "days").toDate());
          }}
          className="bg-rose-300 text-white font-bold py-2 px-4 rounded"
        >
          <ArrowLongRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ChooseDate;
