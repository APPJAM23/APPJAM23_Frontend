import { styled } from "styled-components";
import { Logo, Notification } from "../../assets";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const logoClickHandle = () => {
    navigate("/home");
  };

  return (
    <Container>
      <img onClick={() => logoClickHandle()} src={Logo} alt="로고" />
      <img src={Notification} alt="알람 아이콘" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.WHITE};
  > img {
    height: 30px;
  }
`;

export default Header;
