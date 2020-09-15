import React from 'react';
import { Link } from "react-router-dom";

import './custom-button.styles.scss';

const CustomButton = ({ children, type, to, className, ...otherProps }) => {
    if (type === 'link') {
        return <Link to={to} className={`custom-button ${className}`} {...otherProps}>{children}</Link>;
    } else {
        return <button className={`custom-button ${className}`} {...otherProps}>{children}</button>;
    }
};

export default CustomButton;
