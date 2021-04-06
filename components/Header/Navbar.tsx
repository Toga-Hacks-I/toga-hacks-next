import React, { useRef, useState, useEffect } from "react";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnchorLink from "react-anchor-link-smooth-scroll";

import items from "../../data/navitems";

export default function Navbar() {
  const mobileMenu = useRef(null);
  const [navOpen, setNavOpen] = useState(false); // for mobile

  const handleClick = (e) => {
    if (e.target.classList.contains("toggle")) return;
    if (!mobileMenu.current.contains(e.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const [currItem, setCurrItem] = useState("Hero");

  return (
    <nav className="z-50 w-screen bg-white shadow fixed">
      <div className="container">
        <div className="flex justify-between h-16">
          <AnchorLink
            href="#hero"
            offset="69.69px"
            className="flex-shrink-0 flex items-center"
          >
            <img
              className="block h-9 w-auto"
              src="/img/logos/logo.png"
              alt="toga hacks logo"
            />
          </AnchorLink>
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                className="toggle inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
                aria-expanded="false"
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                  icon={faBars}
                  className={`${navOpen ? "hidden" : "block"} toggle h-6 w-6`}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`${navOpen ? "block" : "hidden"} toggle h-6 w-6`}
                />
              </button>
            </div>

            <div className="hidden lg:ml-6 lg:flex lg:space-x-6 xl:space-x-8">
              {items.map((item) => (
                <NavItem
                  key={item}
                  name={item}
                  active={item == currItem}
                  setCurrItem={setCurrItem}
                />
              ))}
              {/* <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    type="button"
                    className="trans-300 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-togahacks-primary-main shadow-sm hover:bg-togahacks-primary-darker"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="-ml-1 mr-2 h-3 w-3"
                    />
                    <span>CTA</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${navOpen ? "block" : "hidden"} lg:hidden`}>
        <div ref={mobileMenu} className="pt-2 pb-3 space-y-1 shadow-lg">
          {items.map((item) => (
            <MobileNavItem
              key={item}
              name={item}
              active={item == currItem}
              setCurrItem={setCurrItem}
            />
          ))}
          {/* <div className="flex items-center mx-4 py-1">
            <a className="justify-center w-full inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-togahacks-primary-main shadow-sm hover:bg-togahacks-primary-darker">
              <FontAwesomeIcon icon={faPlus} className="-ml-1 mr-2 h-3 w-3" />
              <span>CTA</span>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
