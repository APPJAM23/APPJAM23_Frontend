import { Route, Routes } from "react-router-dom";
import TabLayout from "../pages/TabLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<TabLayout />}>
        {/* 탭이 들어가야 하는 페이지들은 여기에 :) */}
      </Route>
    </Routes>
  );
};

export default MainRouter;
