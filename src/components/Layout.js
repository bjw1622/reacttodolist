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
          <Link to={"/count"}>카운터페이지</Link>
        </UlStyle>
        <UlStyle>
          <Link to={"/"}>todolist</Link>
        </UlStyle>
        <UlStyle>
          <Link to={"/calendar"}>calendar</Link>
        </UlStyle>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
