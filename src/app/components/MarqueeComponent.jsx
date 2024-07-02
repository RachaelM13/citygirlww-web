import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

const MarqueeComponent = () => {
  const phrases = ["~check us out"];
  const [displayPhrases, setDisplayPhrases] = useState(phrases);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    const handleScroll = () => {
      if (
        marqueeElement.scrollLeft + marqueeElement.clientWidth >=
        marqueeElement.scrollWidth
      ) {
        setDisplayPhrases((prevPhrases) => [
          ...prevPhrases.slice(1),
          prevPhrases[0],
        ]);
        marqueeElement.scrollLeft = 0;
      }
    };

    const interval = setInterval(handleScroll, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.marqueeContainer}>
      <marquee
        ref={marqueeRef}
        direction="right"
        className={styles.h1}
        style={{ fontSize: "48px" }}
      >
        {displayPhrases.map((phrase, index) => (
          <span key={index}>
            {phrase}
            {index !== displayPhrases.length - 1 && " "}
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default MarqueeComponent;
