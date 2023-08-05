import { styled } from "styled-components";

const PageContainer = ({ title, subTitle, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};
`;

const SubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray600};
`;

export default PageContainer;
