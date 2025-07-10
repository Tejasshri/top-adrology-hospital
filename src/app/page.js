import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ConsultationForm from "./components/ConsultationForm";
import AboutAndrology from "./components/AboutAndrology";
import WhyAINU from "./components/WhyAINU";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <ConsultationForm />
        <AboutAndrology />
        <WhyAINU />
      </div>
      <Footer />
    </div>
  );
}
