import { Outlet } from "react-router-dom";
import UserNav from "../components/navbars/UserNav";

const UserLayout = () => {
  return (
    <div>
      <UserNav />
      UserLayout
      <Outlet />
    </div>
  );
};

export default UserLayout;
