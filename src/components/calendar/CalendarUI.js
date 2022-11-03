import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useSelector } from "react-redux";
import TodoItem from "../todoList/TodoItem";

const CalendarUI = () => {
  const [value, onChange] = useState(new Date());

  const todoListDateList = [];

  const getTodoDate = useSelector((state) => {
    state.addList.list.map((todoList) => {
      todoListDateList.push(todoList);
    });
    return todoListDateList;
  });

  let clickDayTodoList = [];

  const clickDay = (event) => {
    const clickDayInfo = moment(event).format("DD-MM-YYYY");
    getTodoDate.map((todoList) => {
      if (todoList.addDate === clickDayInfo) {
        clickDayTodoList.push(todoList);
      }
    });
    return clickDayTodoList;
  };

  return (
    <div>
      <Calendar
        onClickDay={clickDay}
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (
            todoListDateList.find(
              (x) => x.addDate === moment(date).format("DD-MM-YYYY")
            )
          ) {
            return "highlight";
          }
        }}
      />
    </div>
  );
};
export default CalendarUI;
