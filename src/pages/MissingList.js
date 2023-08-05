import { styled } from "styled-components";
import { theme } from "../style/Theme";
import List from "../components/common/List";
import { datas } from "../constants/ReportMissing";

const colors = theme.colors;
const text = theme.text;

const MissingList = () => {
  return (
    <Container>
      <Title>실종자 리스트</Title>
      <SubTitle>함께 찾아주세요.</SubTitle>
      <ListContainer>
        {datas.map((data, idx) => {
          return <List key={idx} data={data} />;
        })}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 18px 20px;
`;
const Title = styled.div`
  margin: 5px 0;
  font-size: ${text.title01.fontSize};
  // font-weight: bold;
  color: ${colors.gray900};
`;
const SubTitle = styled.div`
  font-size: ${text.body01}px;
  color: ${colors.gray500};
  margin-bottom: 21px;
`;
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin: 16px 0;
`;

export default MissingList;
