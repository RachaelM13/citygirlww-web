"use client";
import styles from "./page.module.css";
// components
import CarouselHomePage from "./components/carousel.jsx";

export default function Home() {
  return (
    <main>
      <div className={styles.strip1}>
        <div className={styles.textContainer}>
          <p className={styles.h1}>CITY GIRLS</p>
          <p className={styles.h2}>WHO WALK</p>
          <p className={styles.h3}>OFFICIAL PGH CHAPTER</p>
        </div>
        <div className={styles.carouselContainer}>
          <CarouselHomePage />
        </div>
      </div>
    </main>
  );
}
