import { counterAction } from "./Slice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    console.log(state.calendarReducer.Month, state.calendarReducer.Date);
    return state.counter.value;
  });

  const incremntEvent = () => {
    dispatch(counterAction.up(2));
  };
  return (
    <div>
      <button onClick={incremntEvent}>+</button> {count}
    </div>
  );
};
export default Counter;
