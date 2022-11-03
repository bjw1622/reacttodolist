import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoBoard = () => {
  const totalList = useSelector((state) => {
    return state.addList;
  });
  return (
    <div>
      {totalList.list.map((item) => {
        if (item.addDate === moment(new Date()).format("DD-MM-YYYY")) {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              item={item.inputValue}
              check={item.check}
            />
          );
        }
      })}
    </div>
  );
};
export default TodoBoard;
