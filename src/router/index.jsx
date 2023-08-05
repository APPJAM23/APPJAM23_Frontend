import { Route, Routes } from "react-router-dom";
import MissingList from "../pages/MissingList";
import TabLayout from "../pages/TabLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<TabLayout />}>
        {/* 탭이 들어가야 하는 페이지들은 여기에 :) */}
        <Route element={<MissingList />} path="/home"></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
