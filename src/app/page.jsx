"use client";
import styles from "./page.module.css";
// components
import CarouselHomePage from "./components/carousel.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.strip1}>
        <div className={styles.textContainer}>
          <p className={styles.h1}>CITY GIRLS</p>
          <p className={styles.h2}>WHO WALK</p>
          <p className={styles.h3}>OFFICIAL PGH CHAPTER</p>
          <Image src="/pghSkyimg.png" alt="logo" width={500} height={500} />
        </div>
        <div className={styles.carouselContainer}>
          <CarouselHomePage />
        </div>
        {/*plans to add instagram feed component here*/}
      </div>
    </main>
  );
}
