import React, { useEffect, useRef } from "react";
import CategoryButton from "./CategoryButton";
import styles from "../styles/Categories.module.css";

const Categories = ({ categories, activeCategory, onCategoryClick }) => {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  const checkForOverflow = () => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;

    if (container && indicator) {
      indicator.style.display =
        container.scrollWidth > container.clientWidth ? "block" : "none";
    }
  };

  useEffect(() => {
    checkForOverflow();
    window.addEventListener("resize", checkForOverflow);
    return () => window.removeEventListener("resize", checkForOverflow);
  }, [categories]);

  return (
    <div ref={containerRef} className={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={onCategoryClick}
        />
      ))}
      <div ref={indicatorRef} className={styles.scrollIndicator}>
        &gt;
      </div>
    </div>
  );
};

export default Categories;
