import { styled } from "styled-components";
import { theme } from "../style/Theme";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { datas } from "../constants/ReportMissing";


const colors = theme.colors;
const text = theme.text;

const MissingList = () => {
  return (
    <Container>
      <Title style={text.title01}>실종자 리스트</Title>
      <SubTitle style={text.subTitle}>함께 찾아주세요.</SubTitle>
      <Dropdown />
      <ListContainer>
        {datas.map((data) => {
          return <List data={data} />;
        })}
      </ListContainer>
    </Container>
  );
};

const List = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`detail/${data.id}`, { state: data });
      }}
    >
      <Image img={data.img} />
      <div style={{ display: "flex", gap: "60px", margin: "8px 0" }}>
        <Name style={text.subTitle}>{data.name}</Name>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Gender style={text.body01} gender={data.gender}>
            {data.gender}
          </Gender>
          <Age style={text.body01}>{data.age}세</Age>
        </div>
      </div>
      <Char style={text.caption02}>{data.character}</Char>
    </div>
  );
};

const Container = styled.div`
  margin: 18px 20px;
`;
const Title = styled.div`
  margin: 5px 0;
  // font-weight: bold;
  font-weight: 600;
`;
const SubTitle = styled.div`
  color: ${colors.gray500};
  margin-bottom: 21px;
`;
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 12px;
  margin: 16px 0;
`;
const Image = styled.div`
  width: 169px;
  height: 180px;
  background: red;
  background: ${(props) => `url(${props.img}) center/ cover no-repeat`};
  border-radius: 6px;
`;
const Name = styled.div`
  color: ${colors.gray900};
  font-weight: 600;
`;
const Gender = styled.span`
  color: ${(props) =>
    props.gender === "여" ? "#f44336" : "#257cff"}; // 남, 여
`;
const Age = styled.span`
  color: ${colors.gray600};
`;
const Char = styled.div`
  color: ${colors.gray500};
`;
export { Gender };
export default MissingList;
