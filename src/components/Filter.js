import styled from "styled-components";

const Filter = () => {
  return (
    <Container>
      <p>Filters</p>
      <Line />
      {/* <ProductFilter />
      <StateFilter />
      <CityFilter /> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: #131313;
  border-radius: 15px;
  padding: 25px;
  padding-left: 33px;
  padding-right: 33px;
  position: relative;
  width: 17vw;
  height: 22vw;
  display: flex;
  flex-direction: column;
  p {
    position absolute;
    font-size: 25px;
    font-family: Avenir-Light, Arial, Helvetica, sans-serif;
    color: #a5a5a5;
    text-decoration: none;
  }
`;

const Line = styled.div`
  background-color: white;
  margin-top: 43px;
  border: 1px solid #cbcbcb;
  border-radius: 2px;
`;

export default Filter;
