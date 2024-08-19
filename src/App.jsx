import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboardOverview from "./pages/admin/dashboard";
import AdminProfile from "./pages/admin/profile";
import Campaigns from "./pages/admin/dashboard/campaigns";
import CreateCampaign from "./pages/admin/dashboard/campaigns/CreateCampaign";
import EditCampaign from "./pages/admin/dashboard/campaigns/EditCampaign";
import Donations from "./pages/admin/dashboard/donations/Donations";
import AddDonation from "./pages/admin/dashboard/donations/AddDonation";
import EditDonation from "./pages/admin/dashboard/donations/EditDonation";
import Users from "./pages/admin/dashboard/users";
import CreateUser from "./pages/admin/dashboard/users/CreateUser";
import EditUser from "./pages/admin/dashboard/users/EditUser";
import EditAdminProfile from "./pages/admin/profile/EditAdminProfile";
import UserLayout from "./layouts/UserLayout";
import UserDashboardOverview from "./pages/user/dashboard/DashboardOverview";
import UserProfile from "./pages/user/profile/Profile";
import EditUserProfile from "./pages/user/profile/EditProfile";
import MyCampaigns from "./pages/user/dashboard/campaigns/MyCampaings";
import CreateMyCampaign from "./pages/user/dashboard/campaigns/CreateMyCampaign";
import EditMyCampaign from "./pages/user/dashboard/campaigns/EditMyCampaign";
import MyCampaignDetails from "./pages/user/dashboard/campaigns/MyCampaignDetails";
import MyDonations from "./pages/user/dashboard/donations/MyDonations";
import AddMyDonation from "./pages/user/dashboard/donations/AddMyDonation";
import NotFound from "./pages/not-found/NotFound";
import UserRoute from "./components/Routes/UserRoute";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { dummyUser } from "./data-placeholder";
function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("donatrakUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log("User---->", parsedUser);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: parsedUser,
      });
    } else {
      setUser(dummyUser);
    }
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminDashboardOverview /> },
        { path: "/admin/profile", element: <AdminProfile /> },
        { path: "/admin/profile/edit", element: <EditAdminProfile /> },

        // -----------Campaigns ----------------
        { path: "/admin/campaigns", element: <Campaigns /> },
        { path: "/admin/campaigns/create", element: <CreateCampaign /> },
        { path: "/admin/campaigns/:id/edit", element: <EditCampaign /> },

        // --------------Donations ------------------
        { path: "/admin/donations", element: <Donations /> },
        { path: "/admin/donations/add", element: <AddDonation /> },
        { path: "/admin/donations/:id/edit", element: <EditDonation /> },

        // ----------------Users -------------------------
        { path: "/admin/uses", element: <Users /> },
        { path: "/admin/users/create", element: <CreateUser /> },
        { path: "/admin/users/:id/edit", element: <EditUser /> },
      ],
    },

    {
      path: "/user/dashboard",
      element: (
        <UserRoute>
          <UserLayout />
        </UserRoute>
      ),
      children: [
        { index: true, element: <UserDashboardOverview /> },
        { path: "/user/dashboard/profile", element: <UserProfile /> },
        { path: "/user/dashboard/profile/edit", element: <EditUserProfile /> },

        // -----------Campaigns ----------------
        { path: "/user/dashboard/campaigns", element: <MyCampaigns /> },
        {
          path: "/user/dashboard/campaign/:id",
          element: <MyCampaignDetails />,
        },
        {
          path: "/user/dashboard/campaigns/create",
          element: <CreateMyCampaign />,
        },
        {
          path: "/user/dashboard/campaigns/:id/edit",
          element: <EditMyCampaign />,
        },

        // --------------Donations ------------------
        { path: "/user/dashboard/donations", element: <MyDonations /> },
        { path: "/user/dashboard/donations/add", element: <AddMyDonation /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
