import { Home, Auth } from "../Pages";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
