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
        // 오늘 날짜랑 비교해서 오늘 것만
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
