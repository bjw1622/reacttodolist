import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div>
        <Link to={"/count"}>카운터페이지</Link>
      </div>
      <div>
        <Link to={"/todolist"}>todolist</Link>
      </div>
    </>
  );
}
