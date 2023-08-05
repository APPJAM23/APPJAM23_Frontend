import { Route, Routes } from "react-router-dom";
import MissingList from "../pages/MissingList";
import TabLayout from "../pages/TabLayout";
import MissingReportPage from "../pages/MissingReportPage";
import MissingReportDetailPage from "../pages/MissingReportDetailPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<TabLayout />}>
        {/* 탭이 들어가야 하는 페이지들은 여기에 :) */}
        <Route element={<MissingList />} path="/home" />
        <Route element={<MissingReportPage />} path="/missing_report" />
        <Route element={<MissingReportDetailPage />} path="/report_detail" />
      </Route>
    </Routes>
  );
};

export default MainRouter;
