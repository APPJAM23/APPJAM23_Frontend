import { styled } from "styled-components";
import { theme } from "../style/Theme";

const datas = [
    {
        name: "정소라",
        gender: "여",
        age: 6,
        character: "물감 묻히고 다님, 항상 웃음",
        img: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
    },
    {
        name: "정소라",
        gender: "여",
        age: 6,
        character: "물감 묻히고 다님, 항상 웃음",
        img: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
    },
    {
        name: "정소라",
        gender: "남",
        age: 6,
        character: "물감 묻히고 다님, 항상 웃음!!!",
        img: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg'
    },
]

const colors = theme.colors;
const text = theme.text;

const MissingList = () => {
    return(
        <Container>
            <Title>실종자 리스트</Title>
            <SubTitle>함께 찾아주세요.</SubTitle>
            <ListContainer>
                {datas.map((data) => {
                    return <List data={data}/>
                })}
            </ListContainer>
        </Container>
    );
}

const List = ({data}) => {
    return(
        <div>
            <Image img={data.img} />
            <div style={{display: 'flex', gap: '60px', margin: '8px 0'}}>
                <Name>{data.name}</Name>
                <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                    <Gender gender={data.gender} >{data.gender}</Gender>
                    <Age>{data.age}세</Age>
                </div>
            </div>
            <Char>{data.character}</Char>
        </div>
    );
};

const Container = styled.div`
  margin: 18px 20px;
`;
const Title = styled.div`
    margin: 5px 0;
    font-size: ${text.title01}px;
    // font-weight: bold;
    color: ${colors.gray900};
`
const SubTitle = styled.div`
    font-size: ${text.body01}px;
    color: ${colors.gray500};
    margin-bottom: 21px;
`;
const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin: 16px 0;
`;
const Image = styled.div`
    width: 169px;
    height: 180px;
    background: red;
    background: ${props => `url(${props.img}) center/ cover no-repeat`};
    border-radius: 6px;
`
const Name = styled.div`
    font-size: ${text.subTitle}px;
    color: ${colors.gray900};
`
const Gender = styled.span`
    font-size: ${text.body01}px;
    color: ${props => props.gender === "여" ? "#f44336" : "#257cff"} // 남, 여
`
const Age = styled.span`
    font-size: ${text.body01}px;
    color: ${colors.gray600};
`
const Char = styled.div`
    font-size: ${text.caption02}px;
    color: ${colors.gray500};
`
export default MissingList;
