import React from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
const links = [
  { label: "home", route: "/" },
  { label: "about", route: "/about" },
  { label: "Posts", route: "/Posts" },
];
export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
