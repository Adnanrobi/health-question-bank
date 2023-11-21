import { useState } from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search questions..."
        className={styles.searchInput}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
