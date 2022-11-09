import { counterAction } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useEffect } from "react";

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

  useEffect(() => {
    dispatch(counterAction.getCounstRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const incremntEvent = () => {
    dispatch(counterAction.upRequest());
  };

  return (
    <>
      <div>
        <br />
        <CounterBtn onClick={incremntEvent}>+</CounterBtn> {count}
      </div>
    </>
  );
};

export default Counter;
