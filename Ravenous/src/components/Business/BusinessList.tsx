import React from "react";
import styles from "./Business.module.css";

import { Business } from "../Business/Business";

export const BusinessList = ({ businesses }) => {
    return (
        <div className={styles.BusinessList}>
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />;
            })}
        </div>
    );
};