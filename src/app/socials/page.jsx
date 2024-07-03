import styles from "./page.module.css";
import Image from "next/image";

const buttonStyle = {
  fontSize: "32px",
  // backgroundImage: "linear-gradient(white, #f772c6)",
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
  return (
    <main>
      <div className={styles.body}>
        <Image
          className={styles.Image1}
          src="/g23.png"
          alt="about"
          width={650}
          height={450}
        />
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
      </div>
    </main>
  );
}
