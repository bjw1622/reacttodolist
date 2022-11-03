import moment from "moment";
import { useSelector } from "react-redux";
import TodoItem from "../todoList/TodoItem";

const CalendarTodoList = (props) => {
  const todoListDateList = [];
  const getTodoList = useSelector((state) => {
    state.addList.list.map((todoList) => {
      todoListDateList.push(todoList);
    });
  });

  return (
    <div>
      <h2>ToDoList</h2>
      <h3>{moment(props.onClickDay).format("YYYY-DD-MM")}</h3>
      {todoListDateList.map((item) => {
        console.log(props.onClickDay);
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
