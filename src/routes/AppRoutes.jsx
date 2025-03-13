import { Routes, Route } from "react-router-dom";
import Login from "../modules/auth/Login";
import Registration from "../modules/auth/Registration";
import HomeAdmin from "../pages/HomeAdmin";
import HomeUser from "../pages/HomeUser";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/user" element={<HomeUser />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
  );
};

export default AppRoutes;
