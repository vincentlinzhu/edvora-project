import styled from "styled-components";
import Header from "./Header.js";
import Filter from "./Filter.js";
import ItemList from "./ItemList.js";

const Home = (props) => {
  return (
    <Container>
      <Filter />
      <Content>
        <Header />
        <ItemList />
        <ItemList />
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
