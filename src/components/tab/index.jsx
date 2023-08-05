import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, EsCalator, Person, Camera } from "../../assets";
import TabItem from "./TabItem";

const Tab = () => {
  const [activetab, setActiveTab] = useState("/home");
  const [currentLastUrl, setCurrentLastUrl] = useState("/home");

  const navigate = useNavigate();
  const locationHook = useLocation();

  const tabInfo = [
    { title: "홈", Icon: Home, path: "/home" },
    { title: "실종 신고", Icon: EsCalator, path: "/missing_condition" },
    { title: "실종자 찾기", Icon: Person, path: "/find_missing" },
    { title: "프로필", Icon: Camera, path: "/profile" },
  ];

  const onClickTab = (idx) => {
    setActiveTab(tabInfo[idx].path);
    navigate(tabInfo[idx].path);
  };

  useEffect(() => {
    const splitUrl = locationHook?.pathname?.split("/") ?? null;
    const location =
      splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : null;
    setCurrentLastUrl(`/${location}`);
    console.log(currentLastUrl, activetab);
  }, [locationHook]);

  return (
    <TabWrapper>
      {tabInfo.map((info, idx) => {
        const { Icon, title } = info;

        return (
          <TabItem
            key={title}
            Icon={<Icon color={currentLastUrl === tabInfo[idx].path} />}
            isState={tabInfo[idx].path === currentLastUrl}
            onClick={() => onClickTab(idx)}
            title={title}
          />
        );
      })}
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  z-index: 2;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.WHITE};
  bottom: 0;
  width: 100%;
  padding: 7px 31.5px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.colors.gray200};
`;

export default Tab;
