import { Outlet } from "react-router-dom";
import PublicNav from "../components/navbars/PublicNav";

const PublicLayout = () => {
  return (
    <div>
      <PublicNav />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
