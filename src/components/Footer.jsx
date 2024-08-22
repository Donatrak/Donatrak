import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="text-white text-2xl font-bold mb-4">
              DonaTrak
            </Link>
            <p className="text-gray-400">
              DonaTrak is a platform that connects donors with meaningful causes
              to make a positive impact in communities. Join us in our mission
              to bring change.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="hover:text-white">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:support@donatrak.org"
                  className="hover:text-white"
                >
                  support@donatrak.org
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+1234567890" className="hover:text-white">
                  +123 456 7890
                </a>
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Charity Lane,
                Nonprofit City, NP 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current text-gray-400 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.127 8.438 9.878v-6.987h-2.54v-2.733h2.54V9.845c0-2.509 1.492-3.899 3.78-3.899 1.096 0 2.238.194 2.238.194v2.463h-1.26c-1.242 0-1.628.771-1.628 1.563v1.868h2.773l-.443 2.733h-2.33v6.987C18.343 21.127 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current text-gray-400 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.392-1.83.654-2.825.774a4.924 4.924 0 0 0 2.163-2.724 9.868 9.868 0 0 1-3.127 1.194 4.92 4.92 0 0 0-8.384 4.482C7.688 8.095 4.064 6.13 1.64 3.161a4.822 4.822 0 0 0-.664 2.475 4.919 4.919 0 0 0 2.188 4.107 4.897 4.897 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.927 4.927 0 0 0 4.6 3.419 9.868 9.868 0 0 1-6.102 2.102c-.396 0-.787-.023-1.176-.068a13.95 13.95 0 0 0 7.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.004-.426-.015-.637A9.935 9.935 0 0 0 24 4.59z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current text-gray-400 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.304 3.608 1.279.975.975 1.217 2.242 1.279 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.304 2.633-1.279 3.608-.975.975-2.242 1.217-3.608 1.279-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.304-3.608-1.279-.975-.975-1.217-2.242-1.279-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.304-2.633 1.279-3.608.975-.975 2.242-1.217 3.608-1.279 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.052.072 5.775.13 4.538.372 3.464 1.446 2.39 2.52 2.148 3.758 2.09 5.034.015 8.333 0 8.741 0 12s.015 3.667.072 4.948c.058 1.276.3 2.514 1.374 3.588 1.074 1.074 2.312 1.316 3.588 1.374C8.333 23.985 8.741 24 12 24s3.667-.015 4.948-.072c1.276-.058 2.514-.3 3.588-1.374 1.074-1.074 1.316-2.312 1.374-3.588C23.985 15.667 24 15.259 24 12s-.015-3.667-.072-4.948c-.058-1.276-.3-2.514-1.374-3.588-1.074-1.074-2.312-1.316-3.588-1.374C15.667.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 DonaTrak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
