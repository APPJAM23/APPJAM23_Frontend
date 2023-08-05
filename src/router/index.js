import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";
import MissingList from "../pages/MissingList";
import MissingDetail from "../pages/MissingDetail";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/missinglist" element={<MissingList />} />
      <Route path="/missinglist/detail/:id" element={<MissingDetail />} />
    </Routes>
  );
};

export default MainRouter;
