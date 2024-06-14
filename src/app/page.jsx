"use client";
import styles from "./page.module.css";
// components
import CarouselHomePage from "./components/carousel.jsx";

export default function Home() {
  return (
    <main>
      <div className={styles.strip1}>
        <h6 className={styles.h6}>
          CITY GIRLS
          <br />
          WHO WALK
        </h6>
        <div className={styles.carouselContainer}>
          <CarouselHomePage />
        </div>
      </div>
    </main>
  );
}
