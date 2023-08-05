import { styled } from "styled-components";
import { EsCalatorWarning } from "../../assets";
import { useNavigate } from "react-router-dom";

const ReportMissingBox = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/report_detail");
  };

  return (
    <Container onClick={onClickHandle}>
      <img src={EsCalatorWarning} alt="사진" />
      <p>
        지금 바로 <br /> 실종신고하기
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 169px;
  height: 250px;
  border-radius: 6px;
  border: 1px dashed ${({ theme }) => theme.colors.gray500};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  > img {
    width: 51px;
  }
  > p {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray500};
    text-align: center;
  }
`;

export default ReportMissingBox;
