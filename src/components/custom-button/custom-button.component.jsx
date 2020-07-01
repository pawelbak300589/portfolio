import React from 'react';
import { Link } from "react-router-dom";

import './custom-button.styles.scss';

const CustomButton = ({ type, to, className, ...otherProps }) => {
    if (type === 'link') {
        return <Link to={to} className={`custom-button ${className}`} {...otherProps}>Contact me</Link>;
    } else {
        return <button className={`custom-button ${className}`} {...otherProps}>Contact me</button>;
    }
};

export default CustomButton;
