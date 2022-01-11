import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  return (
    <Container>
      <h1>Edvora</h1>
      <h2>Products</h2>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  font-family: Avenir-Light, Arial, Helvetica, sans-serif;
  text-decoration: none;
  background-color: transparent;
  margin-left: 25px;
  // margin-bottom: 20px;

  h1 {
    font-size: 35px;
    color: #f9f9f9;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 25px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default Header;
