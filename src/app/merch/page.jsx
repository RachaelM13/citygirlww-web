"use client";

import React from "react";
import styles from "./page.module.css";

export default function Merch() {
  return (
    <main className={styles.body}>
      <h1 className={styles.h1}>SUPPORT us!</h1>

      <a
        href="https://www.bonfire.com/store/cgww-pgh/?utm_source=copy_link&utm_medium=store_page_published_share&utm_campaign=cgww-pgh&utm_content=default"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          className={styles.card}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")
          }
        >
          <img
            src="Bonfiremerch.png" // Replace with a relevant image URL
            alt="Bonfire Store"
            style={{ width: "600px", height: "auto", objectFit: "cover" }}
          />
        </div>
      </a>
    </main>
  );
}
