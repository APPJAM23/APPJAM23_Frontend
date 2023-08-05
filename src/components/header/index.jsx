import { styled } from "styled-components";
import { Logo, Notification } from "../../assets";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="로고" />
      <img src={Notification} alt="알람 아이콘" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
  justify-content: space-between;
  > img {
    height: 30px;
  }
`;

export default Header;
