import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";
import MissingList from "../pages/MissingList";
import MissingDetail from "../pages/MissingDetail";
import Profile from "../pages/Profile";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/missinglist" element={<MissingList />} />
      <Route path="/missinglist/detail/:id" element={<MissingDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRouter;
