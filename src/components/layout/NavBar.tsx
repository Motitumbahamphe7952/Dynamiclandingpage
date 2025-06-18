import { useState, useEffect, useRef } from "react";
import logo from "../../assets/AstroLabsLogo.png";
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null); // For detecting outside clicks

  // Handle scroll to close menu and add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Handle clicks outside of nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        event.target &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`w-full h-auto px-6  flex justify-between items-center fixed top-0 z-100 transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center w-full h-auto">
        <img src={logo} alt="Logo" className="w-[100px] h-[90px]" />
        <span className={`${isScrolled ? "text-[#4682B4]" : "text-white"} text-lg font-semibold`}>
          ASTROlabs
        </span>
      </div>

      {/* Right: Contact Us, Menu, Hamburger */}
      <div className="flex items-center gap-4 relative ">
        <button className="bg-[#4682B4] hover:bg-[#557895] text-white text-[10px] sm:text-[16px] md:text-[18px] md:font-medium px-4 py-2 rounded-md leading-tight whitespace-nowrap">
          Contact&nbsp;Us
        </button>
        <span className="text-[#4682B4] font-medium hidden sm:inline cursor-pointer">
          MENU
        </span>

        {/* Hamburger */}
        <div
          className="cursor-pointer text-[#4682B4] z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Slide-in Nav Links */}
      <div
        ref={navRef}
        className={`fixed top-0 right-0 h-full w-[365px] bg-[#333538] bg-opacity-95 px-6 py-10 text-white transform transition-transform duration-400 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fixed w-[120px] h-[264px] top-[241px] left-[123px] flex flex-col justify-center gap-[26px]">
          <a
            href="/"
            className="flex items-center gap-2 hover:text-[#4682B4] mb-4"
          >
            <Home size={20} /> Home
          </a>

          {/* Company Dropdown */}
          <div>
            <div
              className="flex items-center justify-between gap-2 hover:text-[#4682B4] mb-2 cursor-pointer"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              <div className="flex items-center gap-2">
                <Info size={20} /> Company
              </div>
              {companyOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
            {companyOpen && (
              <div className="ml-6 flex flex-col gap-2 text-sm text-gray-300 transition-all duration-200">
                <a href="/company/about" className="hover:text-[#4682B4]">
                  About Us
                </a>
                <a href="/company/team" className="hover:text-[#4682B4]">
                  Our Team
                </a>
                <a href="/company/careers" className="hover:text-[#4682B4]">
                  Careers
                </a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div>
            <div
              className="flex items-center justify-between gap-2 hover:text-[#4682B4] mb-2 cursor-pointer"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={20} /> Services
              </div>
              {servicesOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
            {servicesOpen && (
              <div className="ml-6 flex flex-col gap-2 text-sm text-gray-300 transition-all duration-200">
                <a href="/service/web" className="hover:text-[#4682B4]">
                  Web Development
                </a>
                <a href="/service/app" className="hover:text-[#4682B4]">
                  App Development
                </a>
                <a href="/service/design" className="hover:text-[#4682B4]">
                  UI/UX Design
                </a>
              </div>
            )}
          </div>

          <a
            href="/contact"
            className="flex items-center gap-2 hover:text-[#4682B4] mt-4"
          >
            <Phone size={20} /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
