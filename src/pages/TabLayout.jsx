import { Outlet } from "react-router-dom";
import Tab from "../components/tab";
import Header from "../components/header";

const TabLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Tab />
    </>
  );
};

export default TabLayout;
