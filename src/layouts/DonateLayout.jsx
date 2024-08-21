/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

const DonateLayout = () => {
  return (
    <div>
      <div className="bg-[#F3F3F1] flex">
        <Outlet />
      </div>
    </div>
  );
};

export default DonateLayout;
