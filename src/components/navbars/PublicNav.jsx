import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiLogout } from "../../services/auth";

const links = [
  { name: "Home", path: "/" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const PublicNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  const navigate = useNavigate();

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // const res = await apiLogout();
      // console.log("Logout response==>", res);
      window.localStorage.removeItem("donatrakAccessToken");
      window.localStorage.removeItem("donatrakUser");

      dispatch({
        type: "LOGOUT",
        payload: null,
      });
      navigate("/login");
    } catch (error) {
      console.log("Error loging out-->", error);
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed z-50 w-full top-0 bg-primary shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="text-white text-xl font-bold">
                  DonaTrak
                </a>
              </div>
            </div>
            {/* Menu Links */}
            <div className="hidden md:flex justify-center items-center space-x-8 ml-10">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* User Links */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to="/user/dashboard"
                    className="text-white bg-secondary-DEFAULT px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-dark"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white border border-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-light"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="text-white bg-secondary-DEFAULT px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-dark"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="text-white border border-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-light"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile User Links */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-2 space-y-1">
                {user ? (
                  <>
                    <Link
                      to="/user/dashboard"
                      className="block text-white bg-secondary-DEFAULT px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-dark"
                      onClick={toggleMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        toggleMobileMenu();
                        handleLogout();
                      }}
                      className="block text-white border border-white px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-light"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="block text-white bg-secondary-DEFAULT px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-dark"
                      onClick={toggleMobileMenu}
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="block text-white border border-white px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-light"
                      onClick={toggleMobileMenu}
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <div style={{ height: navbarHeight }} className="bg-black"></div>
    </>
  );
};

export default PublicNav;
