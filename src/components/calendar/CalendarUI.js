import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarUI = () => {
  const [value, onChange] = useState(new Date());
  const marks = ["03-11-2022", "04-11-2022", "05-11-2022", "06-11-2022"];
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
    </div>
  );
};
export default CalendarUI;
