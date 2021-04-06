import React from "react";

export default function NavItem({ name, active }) {
  const activeStyles = "border-togahacks-primary-main text-gray-900";
  const defaultStyles =
    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const navItemStyle = `trans-300 inline-flex items-center cursor-pointer px-1 pt-1 border-b-4 text-lg font-medium ${
    active ? activeStyles : defaultStyles
  }`;

  return <a className={navItemStyle}>{name}</a>;
}
