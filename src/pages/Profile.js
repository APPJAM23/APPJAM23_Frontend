import { styled } from "styled-components";
import { theme } from "../style/Theme";

const Profile = () => {
    return(
        <Container>
            <ProfileBox>
                <ProfileImg />
                <UserName style={theme.text.title01}>김땡</UserName>
            </ProfileBox>
            <Table>
                <Box />
                <Square>
                    <div style={theme.text.subTitle}>게시물 보기</div>
                    <div style={theme.text.title01}>240</div>
                </Square>
                <Square2>
                    <div style={theme.text.subTitle}>찾아준 실종자</div>
                    <div style={theme.text.title01}>16</div>
                </Square2>
            </Table>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 19px;
`;
const UserName = styled.div`
    margin: 18px 0;
`;
const ProfileBox = styled.div`
    position: absolute;
    z-index: 50;
    text-align: center;
    top: 19px
`;
const ProfileImg = styled.div`
    width: 132px; height: 132px;
    border-radius: 100px;
    // background: ${ props => `url(${props.img}) center / no-repeat`}
    background: red;
`;
const Table = styled.div`
    display: grid;
`;
const Box = styled.div`
    width: 350px; height: 275px;
    background: ${theme.colors.gray50};
    border-radius: 25px;
    margin-top: 65px;
`
const Square = styled.div`
    width: 175px; height: 175px;
    position: absolute;
    top: 222px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background: ${theme.colors.gray50};
    border-radius: 0 0 0 25px;
    border: ${theme.colors.gray200} solid 1px;
`
const Square2 = styled(Square)`
    left: 194px;
    border-radius: 0 0 25px 0;
`
export default Profile;