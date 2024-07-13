import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <form className={styles.form}>
             <input className={styles.input} type="text" />
             <button className={styles.button_search} type="submit">Search</button>
        </form>
    );
}

export default SearchBar;