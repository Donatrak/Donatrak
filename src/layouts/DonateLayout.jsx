/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

const DonateLayout = ({ user }) => {
  return (
    <div>
      <div className="bg-[#F3F3F1] flex  justify-center">
        <div className="flex flex-col py-4 max-w-2xl mx-auto">
          <h1 className="text-center">
            Donating as{" "}
            <span className="text-lg font-bold text-primary-dark">
              {user.firstName} {user.lastName} ({user.email})
            </span>
          </h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DonateLayout;
