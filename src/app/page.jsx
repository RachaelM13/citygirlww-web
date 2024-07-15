"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1180);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/373188f4-2f78-4a95-9e7e-71b64839335b.js";

    const insertScript = () => {
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(script, s);
    };

    insertScript();

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main>
      {/* strip1 */}
      <div className={styles.strip1}>
        <div className={styles.textBox}>
          <h1 className={styles.h1}>city girls</h1>
          <h1 className={styles.h1Two}>who walk</h1>
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
            <path
              d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111
              c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3
              c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
            />
          </svg>
        </div>
      </div>

      {!isMobile ? (
        <div className={styles.strip2}>
          {/* Collab Gallery */}
          <h2 className={styles.h1Three}>
            walk&nbsp;bond&nbsp;thrive&nbsp;empower&nbsp;repeat&nbsp;walk&nbsp;bond&nbsp;thrive&nbsp;empower&nbsp;repeat
          </h2>
        </div>
      ) : (
        <div className={styles.strip2}>
          {/* Collab Gallery */}
          <h2 className={styles.h1Three}>
            walk&nbsp;bond&nbsp;empower&nbsp;repeat
          </h2>
        </div>
      )}

      {/* insta images */}
      <div className={styles.carouselStrip}>
        <div id="curator-feed-new-feed-layout">
          <a
            href="https://curator.io"
            target="_blank"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>

      {/* strip3 Contact US */}
      <div className={styles.strip3}>
        <div className={styles.contactTextContainer}>
          <h1 className={styles.h1Four}>
            City Girls Who Walk: <br />
            Join Us in Collaboration!
          </h1>
          <p className={styles.contactBodyText}>
            At City Girls Who Walk, we thrive on collaboration. Whether we are
            strolling to our favorite local shops or breaking a sweat at
            Pittsburgh&apos;s finest workout spots, we are always eager to team
            up with local businesses. Our gallery showcases the vibrant events
            and partnerships we have cherished, and we would love for you to be
            part of our journey!
            <br />
            Are you interested in hosting an event with City Girls Who Walk? We
            would love to hear from you! Simply fill out the form below, and
            let&apos;s create something amazing together.
          </p>
          <a
            className="btn btn-primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLScmTroPl0SSKNBvwXsNkItXFD4TmiOnJT5bTxQT4QBCWrmIig/viewform?usp=sf_link"
            role="button"
            target="_blank"
            style={{
              fontSize: "21px",
              backgroundColor: "#f772c6",
              border: "none",
              width: "fit-content",
              marginTop: "3%",
              borderRadius: "25px",
            }}
          >
            <h1 className={styles.contactButtonText}>Contact Us</h1>
          </a>
        </div>
      </div>
    </main>
  );
}
