import React from 'react';

import BackgroundIcon from "../background-icon/background-icon.component";

import './background-icons.styles.scss';

const BackgroundIcons = ({icons}) => {
    return (
        <div className="home-background">
            {
                icons && icons.map(iconData => {
                    const {icon, position, size, duration} = iconData;
                    return <BackgroundIcon icon={icon} style={{ left: position, fontSize: size }} transition={{ duration: duration }} />
                })
            }
        </div>
    );
};

export default BackgroundIcons;
