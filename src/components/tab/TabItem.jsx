import { styled } from "styled-components";

const TabItem = ({ Icon, onClick, isState, title }) => {
  return (
    <TabItemWrapper onClick={onClick}>
      {Icon}
      <TabTitle style={{ color: isState ? "#21242C" : "#9497A0" }}>
        {title}
      </TabTitle>
    </TabItemWrapper>
  );
};

const TabItemWrapper = styled.button`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const TabTitle = styled.p`
  font-weight: 400;
  margin-top: 5px;
  font-size: 14xpx;
`;

export default TabItem;
