import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useSelector } from "react-redux";
import CalendarTodoList from "./CalendarTodoList";

const CalendarUI = () => {
  const [value, onChange] = useState(new Date());

  const getTodoList = useSelector((state) => state.addList.list);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (
            getTodoList.find(
              (x) => x.addDate === moment(date).format("DD-MM-YYYY")
            )
          ) {
            return "highlight";
          }
        }}
      />
      <CalendarTodoList
        onClickDay={moment(value).format("DD-MM-YYYY")}
      ></CalendarTodoList>
    </div>
  );
};
export default CalendarUI;
