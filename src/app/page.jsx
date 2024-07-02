"use client";
import styles from "./page.module.css";
import Image from "next/image";
// components
import GalleryStrip from "./components/GalleryStrip";
import MarqueeComponent from "./components/MarqueeComponent";

export default function Home() {
  return (
    <main>
      {/* strip1 */}
      <div className={styles.strip1}>
        <div className={styles.textBox}>
          <h1 className={styles.h1} style={{ fontSize: "126px" }}>
            city girls
          </h1>
          <h1
            className={styles.h1}
            style={{ lineHeight: 0.5, marginLeft: "109px", fontSize: "126px" }}
          >
            who walk
          </h1>
          <h2 className={styles.h2}>official pgh chapter</h2>
        </div>
        <div className={styles.archBox}>
          <Image
            src="/CGWW-archHome.png"
            alt="logo"
            className={styles.arch}
            layout="responsive"
            width={200}
            height={100}
          />
        </div>
        <div className={styles.blob}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
      </div>
      {/* strip2 */}
      <div className={styles.strip2}>
        <h2
          className={styles.h1}
          style={{
            fontSize: "26px",
            letterSpacing: "4px",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          &nbsp; walk &nbsp; bond &nbsp; thrive &nbsp; empower &nbsp; repeat
          &nbsp; walk &nbsp; bond &nbsp; thrive &nbsp; empower &nbsp; repeat
          &nbsp;
        </h2>
        <GalleryStrip />
      </div>
    </main>
  );
}
