import { Outlet } from "react-router-dom";
import AdminNav from "../components/navbars/AdminNav";

const AdminLayout = () => {
  return (
    <div>
      <AdminNav />
      AdminLayout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
