import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemList = () => {
  return (
    <OuterContainer>
      <Wrapper1>
        <ArrowBackIosIcon />
      </Wrapper1>
      <Container>
        Product Name
        <Line />
        <Slider>
          <Item />
          <Item />
          <Item />
          <Item />
          {/* <Item />
          <Item />
          <Item />
          <Item /> */}
        </Slider>
      </Container>
      <Wrapper2>
        <ArrowForwardIosIcon />
      </Wrapper2>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 45px;
`;

const Wrapper1 = styled.div`
  margin-top: 5%;
  background-color: transparent;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
`;
const Wrapper2 = styled.div`
  margin-top: 5%;
  background-color: transparent;
  margin-left: 5px;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 67vw;
  z-index: 1;
`;

const Line = styled.div`
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 0.2px solid #cbcbcb;
  border-radius: 2px;
  width: 67vw;
`;

const Slider = styled.div`
  //
  // background-color: #131313;
  // border-radius: 15px;
  padding: 30px;
  // margin-bottom: 50px;
  display: grid;
  grip-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  background-color: #131313;
  border-radius: 15px;
  align-items: center;
  overflow: hidden;
  // width: max-content;
`;

export default ItemList;
