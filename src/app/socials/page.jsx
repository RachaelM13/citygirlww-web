"use client";
import { useEffect } from "react";
import styles from "./page.module.css";

const buttonStyle = {
  fontSize: "32px",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "35px",
  marginTop: "20px",
};

const buttonData = [
  {
    text: "Follow our Instagram!",
    link: "https://www.instagram.com/citygirlswhowalkpgh/",
  },
  {
    text: "Join our Facebook Group!",
    link: "https://www.facebook.com/groups/773078910840057",
  },
  {
    text: "Add us on Heylo!",
    link: "https://app.heylo.co/g/daff249b-9edd-4161-81a0-e9ae16c0598f?fdl=2&utm_content=vanity-url&utm_medium=referral&utm_source=linktr.ee",
  },
  {
    text: "8/24 Pirates Game Tickets.",
    link: "https://fevo-enterprise.com/event/CGWW0824",
  },
  {
    text: "Join out Great Strides Team!",
    link: "https://fightcf.cff.org/site/TRR/GreatStrides/136_Western_Pennsylvania_Pittsburgh/168184282?pg=utype&fr_id=10536",
  },
];

export default function Social() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/fd37cd3d-2abf-45a2-8b4b-22ca17cd6cff.js";

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.h1}>follow us!</h1>
          <div className={styles.buttonContainer}>
            {buttonData.map((button, index) => (
              <a
                key={index}
                className="btn btn-primary"
                href={button.link}
                role="button"
                target="_blank"
                style={buttonStyle}
              >
                <h1 className={styles.contactButtonText}>{button.text}</h1>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.waterfall} id="curator-feed-default-feed-layout">
          <a
            href="https://curator.io"
            target="_blank"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>
    </main>
  );
}
