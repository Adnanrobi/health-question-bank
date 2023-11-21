import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ logoSrc, title }) => {
  return (
    <header className={`${styles["header-container"]}`}>
      <div className={styles["logo-container"]}>
        <Image
          src={logoSrc}
          alt="Logo"
          width={200}
          height={50}
          layout="intrinsic"
        />
      </div>
      <h1 className={styles["title"]}>{title}</h1>
    </header>
  );
};

export default Header;
