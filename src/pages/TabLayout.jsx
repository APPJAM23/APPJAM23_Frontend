import { Outlet } from "react-router-dom";
import Tab from "../components/tab";

const TabLayout = () => {
  return (
    <>
      <Outlet />
      <Tab />
    </>
  );
};

export default TabLayout;
