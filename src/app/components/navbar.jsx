"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import useMediaQuery from "./useMediaQuery";
import "./hamburgers.css";

const links = ["HOME", "ABOUT", "SOCIALS", "MERCH"];

export default function Navbar() {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getLinkHref = (text) =>
    text === "HOME" ? "/" : `/${text.toLowerCase()}`;

  const handleLinkClick = (index) => {
    setSelectedLink(index);
    setIsMenuOpen(false); // Close menu on link click
  };

  const getLinkClassName = (text, index) => {
    const href = getLinkHref(text);
    const isSelected = router.pathname && router.pathname.startsWith(href);

    return index === selectedLink || isSelected
      ? `${styles.link} ${styles.selectedLink}`
      : styles.link;
  };

  useEffect(() => {
    setSelectedLink(0);
  }, [router.pathname]);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <button
          className={`hamburger hamburger--collapse ${
            isMenuOpen ? "is-active" : ""
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      {!isMobile && (
        <Image
          className={styles.Image}
          src="/CGWWnavbarLogo.png"
          alt="logo"
          height={520}
          width={520}
        />
      )}
      <div className={styles.spacer}></div>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        {links.map((text, index) => (
          <Link legacyBehavior href={getLinkHref(text)} passHref key={text}>
            <a
              className={getLinkClassName(text, index)}
              onClick={() => handleLinkClick(index)}
            >
              {text}
            </a>
          </Link>
        ))}
        {isMobile && (
          <Image
            src="/CGWWLogoNoCircle.png"
            alt="logo"
            height={140}
            width={200}
          />
        )}
      </div>
    </nav>
  );
}
