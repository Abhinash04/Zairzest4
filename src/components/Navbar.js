import React, { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
// import { useLocation } from "react-router-dom";
import img1 from "../assets/images/navbar-logo.png";
import { GrMenu } from "react-icons/gr";

const Navbar = ({name}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation(); // Use the current location to determine if the user is on a profile route

  useEffect(() => {
    const checkScrollTop = () => {
      if (document.documentElement.scrollTop > 50) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("scroll", checkScrollTop);

    return () => {
      document.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const handleNavigation = (section) => {
    navigate("/", { state: { section } });
  };


  return (
    <div className="w-full fixed z-50">
      <nav
        className="h-15 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mx-[9vw] my-[3vmax] max-w-[400px]:mx-[1vw] custom-mx"
        id="navbar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around nav-mob mx-auto p-3">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          >
            <img src={img1} className="h-8" alt="navbarlogo" />
          </NavLink>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-6xl text-white rounded-lg md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <GrMenu />
          </button>

          <div
            className={`items-center justify-between ${
              isMenuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-semibold text-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <button
                  onClick={() => handleNavigation("section2")}
                  className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("section3")}
                  className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                >
                  Subjects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("section4")}
                  className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                >
                  Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("section5")}
                  className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                >
                  Why EduPulse
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("section6")}
                  className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
