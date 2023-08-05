import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";
import MissingList from "../pages/MissingList";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/missinglist" element={<MissingList />} />
    </Routes>
  );
};

export default MainRouter;
