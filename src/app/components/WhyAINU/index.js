import React from "react";
import styles from "./index.module.css";
import stylesAboutAndrology from "../AboutAndrology/index.module.css";

const WhyAINU = () => {
  return (
    <section className={`${stylesAboutAndrology.container} ${styles.container}`}>
      <div className={stylesAboutAndrology.textBox}>
        <h2 className={stylesAboutAndrology.heading}>
          What Makes AINU the Top Andrology Hospital in Chennai?
        </h2>
        <p className={stylesAboutAndrology.description}>
          Whether it’s infertility, sexual dysfunction, or any male health
          issue; the expert team at AINU is here to help. Don’t wait. Book your
          consultation today at the leading andrology hospital in Chennai.
        </p>
        <div className={stylesAboutAndrology.cta}>
          <button>Schedule Your Appointment Today</button>
        </div>
      </div>

      <div className={styles.right}>
        <ul className={styles.list}>
          <li>Top-rated andrology hospital in Chennai</li>
          <li>Modern, minimally invasive procedures</li>
          <li>Evidence-based treatment protocols</li>
          <li>Advanced diagnostic labs and imaging</li>
          <li>100% confidential consultations and treatments</li>
          <li>Personalized care for each patient</li>
          <li>
            Dedicated team of highly experienced andrology doctors and
            specialists
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyAINU;
