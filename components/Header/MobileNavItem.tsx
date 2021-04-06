import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function MobileNavItem({ name, active, setCurrItem }) {
  const activeStyles =
    "bg-indigo-50 border-togahacks-primary-main text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-150 flex justify-items-stretch items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${
    active ? activeStyles : defaultStyles
  }`;

  return (
    <AnchorLink
      href={"#" + name.toLowerCase()}
      key={name}
      offset="69.69px"
      className={navItemStyle}
    >
      <span onClick={() => setCurrItem(name)}>{name}</span>
    </AnchorLink>
  );
}
