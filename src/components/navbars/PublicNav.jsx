import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const PublicNav = () => {
  // State to track whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div></div>
      <nav className="fixed z-50 w-full top-0 bg-primary shadow-lg">
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
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            {/* Login and Register Links */}
            <div className="hidden md:flex items-center space-x-4">
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
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleMobileMenu} // Toggle the mobile menu on click
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
        {isMobileMenuOpen && ( // Only render the mobile menu if the state is true (open)
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-dark"
                  onClick={toggleMobileMenu} // Optionally close menu on link click
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Register/Login Links */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-2 space-y-1">
                <Link
                  to="/register"
                  className="block text-white bg-secondary-DEFAULT px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-dark"
                  onClick={toggleMobileMenu} // Optionally close menu on link click
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="block text-white border border-white px-3 py-2 rounded-md text-base font-medium hover:bg-secondary-light"
                  onClick={toggleMobileMenu} // Optionally close menu on link click
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>{" "}
    </>
  );
};

export default PublicNav;
