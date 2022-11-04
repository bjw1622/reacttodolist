import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ulStyle = styled.ul`
   {
    padding: 0px;
    margin: 12px;
  }
`;
const Layout = () => {
  return (
    <div>
      <header
        style={{
          background: "lightgray",
          color: "white",
        }}
      >
        <ulStyle>
          <Link to={"/count"}>카운터페이지</Link>
        </ulStyle>
        <ulStyle>
          <Link to={"/"}>todolist</Link>
        </ulStyle>
        <ulStyle>
          <Link to={"/calendar"}>calendar</Link>
        </ulStyle>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
