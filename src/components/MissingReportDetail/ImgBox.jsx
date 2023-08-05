import { styled } from "styled-components";
import { UpLoad } from "../../assets";

const ImgBox = ({ img, onClick }) => {
  return (
    <>
      {img ? (
        <ImgContainer src={img} onClick={onClick} />
      ) : (
        <Container onClick={onClick}>
          <img src={UpLoad} alt="업로드" />
          <p>업로드</p>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 169px;
  height: 186px;
  border-radius: 6px;
  border: 1px dashed ${({ theme }) => theme.colors.gray400};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    width: 40px;
  }
  > p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const ImgContainer = styled.img`
  width: 169px;
  height: 186px;
  border-radius: 6px;
`;

export default ImgBox;
