import { styled } from "styled-components";
import { theme } from "../style/Theme";
import { Gender } from "./MissingList";
import { useNavigate, useLocation } from "react-router-dom";
import backBtn from "../assets/backBtn.svg";

const MissingDetail = () => {
    const text = theme.text;
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const year = new Date().getFullYear();

    return(
        <Container>
            <div style={{display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '12px' }}>
                {/* 아이콘 추가해야됨 */}
                <img src={backBtn} />
                <div style={theme.text.subTitle} onClick={()=>{navigate(-1)}}>돌아가기</div>
                <div style={{fontSize: theme.text.subTitle, color: theme.colors.gray500, marginLeft: 'auto'}}>수정</div>
            </div>
            <Image img={data.pictureUrl}/>
            <Head>
                <div style={text.title01}>{data.name}</div>
                <div style={{display: 'flex', gap: '24px'}}>
                    <Gender gender={data.gender} style={text.title02}>{data.gender}</Gender>
                    <div style={text.title02}>현재 {}세</div>
                    {/* 현재 나이: 지금 연도 - 실종된 연도 당시 나이 */}
                </div>
            </Head>
            <Content>
                <Label>키</Label>
                <Value>128cm</Value>
                <Label>몸무게</Label>
                <Value>34kg</Value>
                <Label>실종 날짜</Label>
                <Value>2023년 6월 7일</Value>
                <Label>실종 장소</Label>
                <Value>경상남도 창원시 준서읍</Value>
                <Label>특이 사항</Label>
                <Value>{data.character}</Value>
            </Content>
        </Container>
    );
}
const Container = styled.div`
    margin: 18px 20px;
`
const Image = styled.div`
    width: 350px;
    height: 360px;
    background: red;
    border-radius: 6px;
    // background: ${props => `url(${props.img}) center/ cover no-repeat`};
    margin-bottom: 16px;
`
const Head = styled.div`
    display: flex;
    align-items: center;
    gap: 130px;
    margin-bottom: 28px;
`
const Content = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 45px);
    grid-template-columns: 100px 266px;
    justify-items: baseline;
`
const Label = styled.div`
    color: ${theme.colors.gray900}
`
const Value = styled.div`
    color: ${theme.colors.gray700}
`
export default MissingDetail;
