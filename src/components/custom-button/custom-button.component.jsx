import React from 'react';
import { Link } from "react-router-dom";

import './custom-button.styles.scss';

const CustomButton = ({ type, to, ...otherProps }) => {
    if (type === 'link') {
        return <Link to={to} className="custom-button" {...otherProps}>Contact me</Link>;
    } else {
        return <button className="custom-button" {...otherProps}>Contact me</button>;
    }
};

export default CustomButton;
