import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <Header />
      </div>
      <Footer />
    </div>
  );
}
