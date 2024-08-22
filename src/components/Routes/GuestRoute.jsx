import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));

  // If the user is logged in, redirect them to the homepage
  if (user) {
    return <Navigate to="/" />;
  }

  // If the user is not logged in, allow them to access the route
  return children;
};

export default GuestRoute;
