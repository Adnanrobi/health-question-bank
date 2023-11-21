import styles from "../styles/CategoryButton.module.css";

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`${styles.categoryButton} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(category)}
    >
      {category.name}
    </button>
  );
};

export default CategoryButton;
