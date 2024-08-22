import { Outlet } from "react-router-dom";
import PublicNav from "../components/navbars/PublicNav";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div>
      <PublicNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
