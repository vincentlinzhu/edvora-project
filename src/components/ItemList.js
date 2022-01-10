import styled from "styled-components";
import Item from "./Item";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ItemList = () => {
  return (
    <Container>
      Product Name
      <Line />
      <Wrap>
        <ArrowBackIosIcon />
        <Slider>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Slider>
        <ArrowForwardIosIcon />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  font-size: 20px;
  margin-left: 75px;
`;

const Line = styled.div`
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 0.2px solid #cbcbcb;
  border-radius: 2px;
  width: 65vw;
`;

const Wrap = styled.div``;

const Slider = styled.div`
  background-color: #131313;
  border-radius: 15px;
  padding: 120px 0px 26px;
  margin-bottom: 50px;
  display: grid;
  grip-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
`;

export default ItemList;
