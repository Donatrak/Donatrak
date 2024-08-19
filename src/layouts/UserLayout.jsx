/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import UserNav from "../components/navbars/UserNav";
import SidebarUserDashboard from "../components/navbars/SidebarUserDashboard";

const UserLayout = (props) => {
  return (
    <div>
      {/* <UserNav /> */}
      <div className="bg-[#F3F3F1] flex">
        <SidebarUserDashboard user={props.user} />
        <div className="w-[65%]">
          <Outlet />
        </div>
        <div className="fixed h-[100vh] right-0 top-0 border-l-2 w-[20%] "></div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
