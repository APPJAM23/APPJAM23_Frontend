import { styled } from "styled-components";
import { theme } from "../style/Theme";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { datas } from "../constants/ReportMissing";
import PageContainer from "../components/PageContainer";
import { useState } from "react";

const colors = theme.colors;
const text = theme.text;

const MissingListPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <PageContainer title="실종자 리스트" subTitle="함께 찾아주세요.">
      <>
        <Dropdown
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
        <ListContainer>
          {datas.map((data) => {
            return <List data={data} />;
          })}
        </ListContainer>
      </>
    </PageContainer>
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

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px 12px;
  margin: 16px 0;
  margin-bottom: 50px;
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

export default MissingListPage;
