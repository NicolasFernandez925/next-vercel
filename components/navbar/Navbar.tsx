import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menu__nav}>
      {menuItems.map(({text, href}) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};
