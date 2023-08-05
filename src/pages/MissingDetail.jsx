import { styled } from "styled-components";
import { theme } from "../style/Theme";
import { Gender } from "./MissingListPage";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMissing } from "../utils/apis/missing";

const MissingDetail = () => {
  const text = theme.text;
  const navigate = useNavigate();
  const param = useParams();
  const { data } = useQuery("", () => getMissing(param.id));

  return (
    <Container>
      <div
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <div>←</div>
        <div
          style={theme.text.subTitle}
          onClick={() => {
            navigate(-1);
          }}
        >
          돌아가기
        </div>
        <div
          style={{
            fontSize: theme.text.subTitle,
            color: theme.colors.gray500,
            marginLeft: "auto",
          }}
        >
          수정
        </div>
      </div>
      <Image img={data?.pictureUrl} />
      <Head>
        <div style={text.title01}>{data?.name}</div>
        <div style={{ display: "flex", gap: "24px" }}>
          <Gender
            gender={data?.gender === "MALE" ? "남" : "여"}
            style={text.title02}
          >
            {data?.gender === "MALE" ? "남" : "여"}
          </Gender>
          <div style={text.title02}>현재 {data?.age}세</div>
        </div>
      </Head>
      <Content>
        <Label>키</Label>
        <Value>{data?.height}cm</Value>
        <Label>몸무게</Label>
        <Value>{data?.weight}kg</Value>
        <Label>실종 날짜</Label>
        <Value>{data?.missingDate}</Value>
        <Label>실종 장소</Label>
        <Value>{data?.missingPlace}</Value>
        <Label>특이 사항</Label>
        <Value>{data?.specialNote}</Value>
      </Content>
      <Button onClick={() => navigate("/find_missing")}>발견 신고하기</Button>
    </Container>
  );
};
const Container = styled.div`
  margin: 18px 20px;
  > img {
    width: inherit;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 130px;
  margin-bottom: 28px;
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 45px);
  grid-template-columns: 100px 266px;
  justify-items: baseline;
`;
const Image = styled.div`
  width: 169px;
  height: 180px;
  background: red;
  background: ${(props) => `url(${props.img}) center/ cover no-repeat`};
  border-radius: 6px;
`;
const Label = styled.div`
  color: ${theme.colors.gray900};
`;
const Value = styled.div`
  color: ${theme.colors.gray700};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.Primary};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  width: 90vw;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  position: fixed;
  bottom: 90px;
`;

export default MissingDetail;
