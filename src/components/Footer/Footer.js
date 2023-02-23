import Discord from "@/components/Logos/Discord";
import Instagram from "@/components/Logos/Instagram";
import Twitter from "@/components/Logos/Twitter";
import Youtube from "@/components/Logos/Youtube";
import Spotify from "@/components/Logos/Spotify";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <Instagram height="28px" width="28px" />
        </div>
        <div className={styles.logo}>
          <Spotify height="28px" width="28px" />
        </div>
        <div className={styles.logo}>
          <Discord height="28px" width="28px" />
        </div>
        <div className={styles.logo}>
          <Youtube height="28px" width="28px" />
        </div>
        <div className={styles.logo}>
          <Twitter height="28px" width="28px" />
        </div>
      </div>
      <p> © 2023 The Formante Recording Services</p>
    </footer>
  );
}

export default Footer;
