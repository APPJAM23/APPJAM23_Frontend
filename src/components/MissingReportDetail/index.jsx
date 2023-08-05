import { useRef, useState } from "react";
import { styled } from "styled-components";
import ImgBox from "./ImgBox";

const Content = () => {
  const fileInput = useRef(null);

  const [upLoadImg, setUpLoadImg] = useState("");
  const [preview, setPreview] = useState("");

  const imgOnChange = (e) => {
    if (e.target.files[0]) {
      setUpLoadImg(e.target.files[0]);
      setPreview(e.target.files[0]);
    } else {
      setUpLoadImg(upLoadImg);
      setPreview(preview);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          사진<Red>*</Red>
        </Title>
        <ImgBox
          img={preview}
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          name="missing_img"
          onChange={imgOnChange}
          ref={fileInput}
        />
      </Wrapper>

      <Wrapper>
        <Title>
          이름<Red>*</Red>
        </Title>
        <Input />
      </Wrapper>

      <Wrapper>
        <Title>
          성별<Red>*</Red>
        </Title>
        <HorizontalityWrapper>
          <label>
            <input type="radio" name="gender" value="male" /> 남자
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> 여자
          </label>
        </HorizontalityWrapper>
      </Wrapper>

      <Wrapper>
        <Title>
          나이<Red>*</Red>
        </Title>
        <div>
          <MiniInput />
          <p>세</p>
        </div>
      </Wrapper>

      <HorizontalityWrapper>
        <Wrapper>
          <Title>
            키<Red>*</Red>
          </Title>
          <div>
            <MiniInput />
            <p>cm</p>
          </div>
        </Wrapper>
        <Wrapper>
          <Title>
            몸무게<Red>*</Red>
          </Title>
          <div>
            <MiniInput />
            <p>kg</p>
          </div>
        </Wrapper>
      </HorizontalityWrapper>

      <Wrapper>
        <Title>
          유형<Red>*</Red>
        </Title>
        <HorizontalityWrapper>
          <label>
            <input type="radio" name="category" value="DEMENTIA" /> 치매
          </label>
          <label>
            <input type="radio" name="category" value="CHILD" /> 아동
          </label>
          <label>
            <input type="radio" name="category" value="DISABLED" /> 장애인
          </label>
          <label>
            <input type="radio" name="category" value="TEENAGE_RUNAWAY" />
            청소년
          </label>
          <label>
            <input type="radio" name="category" value="ETC" />
            기타
          </label>
        </HorizontalityWrapper>
      </Wrapper>

      <Wrapper>
        <Title>
          실종 날짜<Red>*</Red>
        </Title>
        <DateInput type="date" />
      </Wrapper>
      <Wrapper>
        <Title>
          실종 위치<Red>*</Red>
        </Title>
        <Input />
      </Wrapper>

      <Wrapper>
        <Title>인상착의</Title>
        <Text />
      </Wrapper>

      <Wrapper>
        <Title>특이사항</Title>
        <Text />
      </Wrapper>

      <ReportButton>실종 신고하기</ReportButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  > div {
    display: flex;
    gap: 12px;
    align-items: center;
    > p {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray800};
    }
  }
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.gray900};
  display: flex;
  gap: 5px;
`;

const Red = styled.p`
  color: red;
`;

const Input = styled.input`
  width: inherit;
  height: 40px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const HorizontalityWrapper = styled.div`
  display: flex;
  gap: 12px;
  > label {
    > input {
      margin-right: 5px;
    }
  }
`;

const MiniInput = styled.input`
  width: 109px;
  height: 40px;
  outline: none;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
`;

const DateInput = styled.input`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
  border-radius: 6px;
  outline: none;
`;

const Text = styled.textarea`
  min-height: 120px;
  padding: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
  border-radius: 6px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const ReportButton = styled.button`
  background: ${({ theme }) => theme.colors.Primary};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
`;

export default Content;
