import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const List = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/home/detail/${data.id}`)}>
      <Image img={data?.pictureUrl} />
      <div style={{ display: "flex", gap: "60px", margin: "8px 0" }}>
        <Name>{data?.name}</Name>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Gender gender={data?.gender === "MALE" ? "남" : "여"}>
            {data?.gender === "MALE" ? "남" : "여"}
          </Gender>
          <Age>{data?.age}세</Age>
        </div>
      </div>
      <Char>{data?.specialNote}</Char>
    </div>
  );
};

const Image = styled.div`
  width: 169px;
  height: 180px;
  background: red;
  background: ${(props) => `url(${props.img}) center/ cover no-repeat`};
  border-radius: 6px;
`;
const Name = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray900};
`;
const Gender = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${(props) => (props.gender === "여" ? "#f44336" : "#257cff")};
`;
const Age = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const Char = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.gray500};
`;

export default List;
