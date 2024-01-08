import React from "react";

import { Business } from "../Business/Business";

export const BusinessList = ({ businesses }) => {
    return (
        <div>
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />;
            })}
        </div>
    );
};