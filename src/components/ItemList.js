import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const ItemList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios("https://assessment-edvora.herokuapp.com/");

      setProduct(req.data);
    }

    fetchData();
  }, []);

  return (
    <OuterContainer>
      <Wrapper1>
        <ArrowBackIosIcon />
      </Wrapper1>
      <Container>
        Product Name
        <Line />
        <Slider>
          {product &&
            product.map((prod) => (
              <ItemContent key={prod.product_name}>
                <img src={prod.image} alt={prod.brand} />
              </ItemContent>
            ))}
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
  padding: 0 0 26px;
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
  padding: 30px;
  font-size: 14px;
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

const ItemContent = styled.div`
  color: white;
  font-family: Avenir-Light, Arial, Helvetica, sans-serif;
  text-decoration: none;
  background-color: #232323;
  border: 1px solid white;
  width: 15vw;
  height: 10vw;
  border-radius: 4.68775px;
  z-index: 99;
  margin-right: 25px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.1);
    border-color: rgba(249, 249, 249, 0.8);
    cursor: pointer;
  }
  img {
    margin: 10px;
    object-fit: contain;
    overflow: hidden;
    width: 36%;
    height: 50%;
    background-color: white;
    border-radius: 10px;
  }
`;

export default ItemList;
