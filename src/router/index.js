import { Home, Auth, Dashboard } from "../Pages";
import { Navigation } from "../components";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
