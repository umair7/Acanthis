import React from 'react';

const NavItems = () => {
  return (
    <>
      <li className="hover:text-red-400">
        <a href="/NavbarItems/Features">Features</a>
      </li>
      <li className="hover:text-red-400">
        <a href="/NavbarItems/Pricing">Pricing</a>
      </li>
      <li className="hover:text-red-400">
        <a href="/NavbarItems/About">About</a>
      </li>
      <li className="hover:text-red-400">
        <a href="/NavbarItems/Partners">Partners</a>
      </li>
    </>
  );
}

export default NavItems;
