import React from "react";
import { Link, Outlet } from "react-router-dom";
const Index = () => {
  return (
    <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
      <div>
        <Link to={"/count"}>카운터페이지</Link>
      </div>
      <div>
        <Link to={"/todolist"}>todolist</Link>
      </div>
      <div>
        <Link to={"/calendar"}>calendar</Link>
      </div>
    </header>
  );
};

export default Index;
