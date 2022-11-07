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
          background: "gray",
          color: "white",
          display: "flex",
        }}
      >
        <UlStyle>
          <Link
            to={"/count"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Count
          </Link>
        </UlStyle>
        <UlStyle>
          <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
            TodoList
          </Link>
        </UlStyle>
        <UlStyle>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/calendar"}
          >
            Calendar
          </Link>
        </UlStyle>
        <UlStyle>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/board"}
          >
            Board
          </Link>
        </UlStyle>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
