"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null); // State to track selected link
  const links = ["HOME", "ABOUT", "SOCIALS", "MERCH"];
  const halfwayIndex = Math.floor(links.length / 2 - 1);

  const getLinkHref = (text) =>
    text === "HOME" ? "/" : `/${text.toLowerCase()}`;

  const getLinkClassName = (text, index) => {
    const href = getLinkHref(text);
    const isSelected = router.pathname === href || selectedLink === index; // Check if link is selected

    if (hoveredLink === index) {
      return `${styles.link} ${styles.linkHover}`;
    }
    return isSelected ? `${styles.link} ${styles.selectedLink}` : styles.link;
  };

  const handleLinkClick = (index) => {
    setSelectedLink(index); // Set the selected link index when clicked
  };

  return (
    <nav className={styles.navbar}>
      {links.map((text, index) => (
        <React.Fragment key={text}>
          <Link
            href={getLinkHref(text)}
            className={getLinkClassName(text, index)}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => handleLinkClick(index)} // Call handleLinkClick on click
          >
            {text}
          </Link>
          {index === halfwayIndex && (
            <Image src="/CGWWLogo.png" alt="logo" height={180} width={180} />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
