import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddList from "../todoList/AddList";
import TodoItem from "../todoList/TodoItem";
import { v4 as uuidv4 } from "uuid";

const CalendarTodoList = (props) => {
  const [inputValue, setInputValue] = useState("");

  const id = uuidv4();

  const addData = {
    id,
    inputValue,
    check: false,
    addDate: props.onClickDay,
  };

  const setInputVal = (e) => {
    setInputValue(e);
  };

  const getTodoList = useSelector((state) => state.addList.list);

  return (
    <div>
      <h2>ToDoList</h2>
      <h3>{moment(props.onClickDay).format("YYYY-DD-MM")}</h3>
      <input
        id="input-value"
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputValue}
      />
      <AddList addData={addData} setInputVal={setInputVal}></AddList>
      {getTodoList.map((item) => {
        if (item.addDate === props.onClickDay) {
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
export default CalendarTodoList;
