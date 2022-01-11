import styled from "styled-components";
import Header from "./Header.js";
import Filter from "./Filter.js";
import DigitsLimited from "./DigitsLimited.js";
import TCSCorporation from "./TCSCorporation.js";
import BerkshireHathway from "./BerkshireHathway.js";
import Facebook from "./Facebook.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../features/product/productSlice";
import axios from "axios";

const Home = (props) => {
  const dispatch = useDispatch();
  let DigitsLimit = [];
  let TCSCorporations = [];
  let BerkshireHathways = [];
  let Facebooks = [];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios("https://assessment-edvora.herokuapp.com/");

      setProducts(req.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    products &&
      products.map((prod) => {
        switch (prod.product_name) {
          case "Digits Limited":
            DigitsLimit = [...DigitsLimited, prod];
            break;
          case "TCS corporation":
            TCSCorporations = [...TCSCorporation, prod];
            break;
          case "Berkshire Hathway":
            BerkshireHathways = [...BerkshireHathway, prod];
            break;
          case "Facebook":
            Facebooks = [...Facebook, prod];
            break;
        }
      });

    dispatch(
      setProduct({
        DigitsLimited: DigitsLimit,
        TCSCorporation: TCSCorporations,
        BerkshireHathway: BerkshireHathways,
        Facebook: Facebooks,
      })
    );
  }, []);

  return (
    <Container>
      <Filter />
      <Content>
        <Header />
        <DigitsLimited />
        <TCSCorporation />
        <BerkshireHathway />
        <Facebook />
      </Content>
    </Container>
  );
};

const Container = styled.main`
  background-color: #252424;
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: rows;
  }
`;
const Content = styled.div`
  background-color: #252424;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Home;
