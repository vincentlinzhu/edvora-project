import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios("https://assessment-edvora.herokuapp.com/");

      setProduct(req.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      {product.map((prod) => (
        <img src={prod.image} alt={prod.brand} key={prod.product_name} />
      ))}
    </Container>
  );
};

const Container = styled.div`
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
    object-fit: fill;
    overflow: hidden;
    width: 50%;
    height: 50%;
  }
`;

export default Item;
