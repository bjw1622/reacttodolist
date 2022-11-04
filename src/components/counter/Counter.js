import { counterAction } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const CounterBtn = styled.button`
   {
    opacity: ${(count) => (count === 2 ? "0.1" : "1")};
  }
`;
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
      <CounterBtn onClick={incremntEvent}>+</CounterBtn> {count}
    </div>
  );
};
export default Counter;
