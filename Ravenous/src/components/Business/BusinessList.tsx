import React from "react";
import styles from './Business.module.css'

import { Business } from "./Business";

export const BusinessList = () => {
    return (
        <div className={styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
};