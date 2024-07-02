import React from "react";
import Image from "next/image";
import styles from "./GalleryStrip.module.scss";

const GalleryStrip = () => {
  return (
    <div className={styles.galleryContainer}>
      <div id="mz-gallery-container" className={styles.gallery}>
        <figure>
          <Image
            src="/homePage/CGWW-steelhouse.jpg"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <figcaption>
            CITY GIRLS <br /> WHO CYCLE
          </figcaption>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
        <figure>
          <Image
            src="/homePage/CGWW-citytrail.jpg"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <figcaption>
            CITY GIRLS <br />
            WHO HIKE
          </figcaption>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
        <figure>
          <Image
            src="/homePage/CGWW-ballet.jpg"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <figcaption>
            CITY GIRLS <br />
            WHO BALLET
          </figcaption>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
        <figure>
          <Image
            src="/homePage/CGWW-citypups.jpg"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <figcaption>
            CITY PUPS <br />
            WHO WALK
          </figcaption>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
      </div>
    </div>
  );
};

export default GalleryStrip;
