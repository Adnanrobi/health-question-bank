import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ logoSrc, title, subtitle }) => {
  return (
    <header className={styles.header}>
      <Image
        src={logoSrc}
        alt="Logo"
        width={200}
        height={50}
        layout="fixed"
        className={styles.logo}
      />
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </header>
  );
};

export default Header;
