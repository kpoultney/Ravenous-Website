import React from 'react';
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviews": "review_count"
};

export const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOptions) => {
            let sortByOptionValue = sortByOptions[sortByOptions];
            return <li key={sortByOptionValue}>{sortByOptions}</li>;
        });
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input type="text" placeholder="Search Businesses" />
                <input type="text" placeholder="Where?" />
            </div>
            <div className={styles.SearchBarSubmit}><a>Let's Go</a>
            </div>
        </div>
    );
};