import { Link } from "react-router-dom";
import styled from "styled-components";

export const Fitler_Navbar = () => {
  const Main = styled.div`
    background-color: white;
    height: 65px;
    font-family: samsung400;
    padding-left: 5%;
    padding-right: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 7;
    border-top: 1px solid #c6c6c6;
    border-bottom: 1px solid #c6c6c6;

    & a {
      text-decoration: none;
      padding: 2%;
      font-size: 15px;
      color: black;
      font-weight: bold;
      font-family: samsung400;
    }
  `;
  return (
    <Main>
      <Link to={"/"}>Filters</Link>
      <Link to={"/"}>Results</Link>
      <Link to={"/"}>Reset Filters</Link>
    </Main>
  );
};
