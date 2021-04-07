import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavItem({ name, active, setCurrItem }) {
  const activeStyles = "border-togahacks-primary-main text-togahacks-secondary-main";
  const defaultStyles =
    "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800";
  const navItemStyle = `trans-300 inline-flex items-center cursor-pointer px-1 pt-1 border-b-4 text-md font-medium ${
    active ? activeStyles : defaultStyles
  }`;

  return (
    <AnchorLink
      href={"#" + name.toLowerCase()}
      key={name}
      offset="60px"
      className={navItemStyle}
    >
      <span onClick={() => setCurrItem(name)}>{name}</span>
    </AnchorLink>
  );
}
