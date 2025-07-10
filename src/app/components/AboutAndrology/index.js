import React from "react";
import styles from "./index.module.css";

const AboutAndrology = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textBox}>
        <h2 className={styles.heading}>What is Andrology?</h2>
        <p className={styles.description}>
          Andrology is the branch of medicine that deals with male reproductive health,
          sexual function, and urological conditions unique to men. It covers everything
          from fertility issues and hormone imbalances to sexual dysfunction and
          age-related changes.
        </p>
        <p className={styles.description}>
          At AINU, patients benefit from advanced medical expertise and compassionate care,
          making us one of the most trusted choices for anyone seeking an andrology hospital
          in Chennai.
        </p>
        <div className={styles.cta}>
          <p>Still Have Questions?</p>
          <button>Talk to an Expert Today</button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <img src="/family.webp" alt="Family" />
      </div>
    </section>
  );
};

export default AboutAndrology;
