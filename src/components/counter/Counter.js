import { counterAction } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.value;
  });

  const incremntEvent = () => {
    dispatch(counterAction.up(2));
  };
  return (
    <div>
      <br />
      <button onClick={incremntEvent}>+</button> {count}
    </div>
  );
};
export default Counter;
