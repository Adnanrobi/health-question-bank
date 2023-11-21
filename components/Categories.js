import CategoryButton from "./CategoryButton";
import styles from "../styles/Categories.module.css";

const Categories = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={onCategoryClick}
        />
      ))}
    </div>
  );
};

export default Categories;
