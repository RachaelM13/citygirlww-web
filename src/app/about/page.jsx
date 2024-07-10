import Image from "next/image";
import styles from "./page.module.css";
export default function About() {
  return (
    <main>
      <div className={styles.body}>
        <div className={styles.blob}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
        <h1 className={styles.h1}>all about us!</h1>
        {/* strip1 */}
        <div className={styles.strip1}>
          <div className={styles.textContainer}>
            <h2 className={styles.h2}>Our Mission</h2>
            <h3 className={styles.h3}>What Drives Us?</h3>
            <p className={styles.p}>
              At City Girls Who Walk, our mission is to foster a sense of
              community and empowerment among women through regular walking
              events. We believe in the power of connection, fitness, and mutual
              support to create a positive impact on individual lives and the
              larger community.
            </p>

            <p className={styles.p}>
              Bring your pups and friends and join us on our next walk! Let us
              make the community safer together.
            </p>
          </div>
          <Image
            className={styles.Image1}
            src="/aboutPage/CGWW-about1.jpg"
            alt="about"
            width={650}
            height={450}
          />
        </div>
        {/* strip2 */}
        <div className={styles.strip1}>
          <Image
            className={styles.Image2}
            src="/aboutPage/CGWW-about2.png"
            alt="about"
            width={650}
            height={450}
          />
          <div className={styles.textContainer}>
            <h2 className={styles.h2}>Our Activities</h2>
            <h3 className={styles.h3}>How Do We Engage?</h3>
            <p className={styles.p}>
              We organize weekly walking events in various neighborhoods around
              Pittsburgh, collaborating with local businesses and fitness
              centers to provide enriching experiences. Our activities include
              themed walks, health and wellness sessions, and community-building
              events, all aimed at promoting a healthy and active lifestyle.
            </p>
            <p className={styles.p}>
              We use Instagram, Facebook, and Heylo to share the latest updates
              and event information. Follow us on these platforms to stay
              connected and never miss out on our exciting activities.
            </p>
          </div>
        </div>
        {/* strip3 */}
        <div className={styles.strip1}>
          <div className={styles.textContainer}>
            <h2 className={styles.h2}>Join Us</h2>
            <h3 className={styles.h3}>How Can You Get Involved?</h3>
            <p className={styles.p}>
              Joining City Girls Who Walk is easy and open to all women looking
              to connect, stay active, and support one another. Whether you are
              interested in participating in our walks, volunteering at events,
              or partnering with us as a local business, there is a place for
              you in our community. Fill out our contact form to learn more and
              get started!
            </p>
          </div>
          <Image
            className={styles.Image1}
            src="/aboutPage/CGWW-about3.png"
            alt="about"
            width={650}
            height={450}
          />
        </div>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logoImage}
            src="/CGWWLogoNoCircle.png"
            alt="about"
            width={250}
            height={250}
          />
        </div>
      </div>
    </main>
  );
}
