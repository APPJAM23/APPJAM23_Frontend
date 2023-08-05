import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/Main";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default MainRouter;
