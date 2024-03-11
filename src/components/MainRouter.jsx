import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import RequestDetail from "../pages/RequestDetail";
import MainLayout from "./MainLayout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/request/:id" element={<RequestDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
