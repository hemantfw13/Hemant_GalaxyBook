import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const Main = styled.div`
    background-color: #f7f7f7;
    height: 53px;
    font-family: samsung400;
    padding-left: 25%;
    padding-right: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 7;
    border-top: 1px solid #c6c6c6;
    border-bottom: 1px solid #c6c6c6;

    & a {
      text-decoration: none;
      padding: 2%;
      font-size: 13px;
      color: black;
    }
  `;
  return (
    <Main>
      <Link to={"/"}>Galaxy Book2 Pro 360</Link>
      <Link to={"/"}>Galaxy Book2 Pro</Link>
      <Link to={"/"}>Galaxy Book2 360</Link>
      <Link to={"/"}>Galaxy Book Go</Link>
    </Main>
  );
};
