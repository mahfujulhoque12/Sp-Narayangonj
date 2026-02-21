import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navItems } from "./Items";
import { MdLanguage } from "react-icons/md";

export default function MiddleNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);

  const activeClass = "text-white text-sm bg-brand rounded-lg px-3 py-2";
  const baseClass =
    "text-gray-800 hover:text-brand transition font-medium text-sm hover:bg-brand/15 rounded-lg px-3 py-2";

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white py-3 relative" ref={navRef}>
      <div className="wrapper flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Link>
          <div>
            <p className="text-base font-semibold text-brand">জেলা পুলিশ </p>
            <p className="text-yellow-600 text-sm">নারায়ণগঞ্জ</p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isChildActive = item.children?.some((child) =>
              location.pathname.startsWith(child.path),
            );

            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 font-medium cursor-pointer ${
                        isChildActive ? activeClass : baseClass
                      }`}
                    >
                      {item.label}
                      <FaChevronDown
                        size={12}
                        className={`transition-transform ${
                          dropdownOpen === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen === item.label && (
                      <div className="absolute left-0 top-full pt-2 z-[50]">
                        <div className="w-50 bg-white shadow-lg flex flex-col rounded-md py-2 px-4 space-y-4">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.label}
                              to={child.path}
                              className={({ isActive }) =>
                                isActive ? activeClass : baseClass
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path!}
                    className={({ isActive }) =>
                      isActive ? activeClass : baseClass
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>

        {/* right part  */}

        <button className="text-sm font-medium rounded-full px-6 py-2 border border-brand cursor-pointer flex items-center gap-3 ">
          <MdLanguage size={25} />
          Ban
        </button>
        {/* right part end  */}

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2 z-[40]">
          {navItems.map((item) => {
            const isChildActive = item.children?.some((child) =>
              location.pathname.startsWith(child.path),
            );

            return (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.label ? null : item.label,
                        )
                      }
                      className={`w-full flex justify-between items-center py-2 font-medium ${
                        isChildActive ? activeClass : baseClass
                      }`}
                    >
                      {item.label}
                      <FaChevronDown
                        size={12}
                        className={`transition-transform ${
                          dropdownOpen === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            onClick={() => {
                              setDropdownOpen(null);
                              setMobileOpen(false);
                            }}
                            className={({ isActive }) =>
                              isActive ? activeClass : baseClass
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path!}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      isActive ? activeClass : baseClass
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}
