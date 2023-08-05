import { styled } from "styled-components";
import { theme } from "../style/Theme";
import { ProfileImg } from "../assets";

const Profile = () => {
  return (
    <Container>
      <ProfileBox>
        <img src={ProfileImg} alt="프로필 이미지" />
        <UserName style={theme.text.title01}>안윤지</UserName>
      </ProfileBox>
      <Table>
        <Box />
        <Square>
          <div style={theme.text.subTitle}>게시물 조회 수</div>
          <div style={theme.text.title01}>89</div>
        </Square>
        <Square2>
          <div style={theme.text.subTitle}>목격 실종자</div>
          <div style={theme.text.title01}>3</div>
        </Square2>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;
const UserName = styled.div`
  margin: 18px 0;
`;
const ProfileBox = styled.div`
  position: absolute;
  z-index: 50;
  text-align: center;
  top: 100px;
  > img {
    width: 132px;
  }
`;

// const ProfileImg = styled.div`
//   width: 132px;
//   height: 132px;
//   border-radius: 100px;
//   background: red;
// `;
const Table = styled.div`
  display: grid;
`;
const Box = styled.div`
  width: 350px;
  height: 275px;
  background: ${theme.colors.gray50};
  border-radius: 25px;
  margin-top: 65px;
`;
const Square = styled.div`
  width: 175px;
  height: 138px;
  position: absolute;
  top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background: ${theme.colors.gray50};
  border-radius: 0 0 0 25px;
  border: ${theme.colors.gray200} solid 1px;
`;
const Square2 = styled(Square)`
  left: 194px;
  border-radius: 0 0 25px 0;
`;
export default Profile;
