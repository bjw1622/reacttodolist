import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
const UlStyle = styled.ul`
   {
    padding: 10px;
    margin: 0px;
  }
`;
const Layout = () => {
  return (
    <>
      <header
        style={{
          background: "lightgray",
          color: "white",
          display: "flex",
        }}
      >
        <UlStyle>
          <Link to={"/count"}>Count</Link>
        </UlStyle>
        <UlStyle>
          <Link to={"/"}>TodoList</Link>
        </UlStyle>
        <UlStyle>
          <Link to={"/calendar"}>Calendar</Link>
        </UlStyle>
        <UlStyle>
          <Link to={"/board"}>Board</Link>
        </UlStyle>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
