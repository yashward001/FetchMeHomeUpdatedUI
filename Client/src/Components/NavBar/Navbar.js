import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./images/logo.png";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); 
  const isAdmin = user?.isAdmin;

  const [adoptDropdown, setAdoptDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="FetchMeHome Logo" />
          <span className="logo-text">FetchMeHome</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Main Navigation */}
        <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li className={isActive("/")}>
              <Link to="/">Home</Link>
            </li>
            
            <li 
              className={`dropdown ${isActive("/services")}`}
              onMouseEnter={() => setServicesDropdown(true)} 
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link to="/services">
                Services <i className="dropdown-icon"></i>
              </Link>
              {servicesDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/services#adopt">Post for Adoption</Link></li>
                  <li><Link to="/services#lost">Report Lost Pet</Link></li>
                </ul>
              )}
            </li>
            
            <li className={isActive("/find")}>
              <Link to="/find">Find</Link>
            </li>
            
            <li 
              className={`dropdown ${isActive("/pets") || isActive("/personality") || isActive("/saved") ? "active" : ""}`} 
              onMouseEnter={() => setAdoptDropdown(true)} 
              onMouseLeave={() => setAdoptDropdown(false)}
            >
              <Link to="/pets">
                Adopt <i className="dropdown-icon"></i>
              </Link>
              {adoptDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/personality">Personality Test</Link></li>
                  {isLoggedIn && <li><Link to="/saved">Saved Pets</Link></li>}
                </ul>
              )}
            </li>

            <li className={isActive("/faq")}>
              <Link to="/faq">FAQ</Link>
            </li>

            {isAdmin && (
              <li className={isActive("/admin")}>
                <Link to="/admin" className="admin-link">Admin Panel</Link>
              </li>
            )}
          </ul>

          <div className="auth-buttons">
            {!isLoggedIn ? (
              <>
                <Link to="/register" className="btn btn-register">Register</Link>
                <Link to="/login" className="btn btn-login">Login</Link>
              </>
            ) : (
              <>
                <Link to="/mypanel" className="btn btn-panel">
                  <i className="user-icon"></i>My Panel
                </Link>
                <button onClick={handleLogout} className="btn btn-logout">Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;