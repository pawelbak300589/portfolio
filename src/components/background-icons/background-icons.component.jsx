import React from 'react';
import { faJsSquare, faReact, faPhp, faCss3Alt, faSass, faHtml5, faGitAlt, faLaravel, faDocker } from "@fortawesome/free-brands-svg-icons";

import BackgroundIcon from "../background-icon/background-icon.component";

import './background-icons.styles.scss';

const BackgroundIcons = () => {
    return (
        <div className="home-background">
            <BackgroundIcon icon={faJsSquare} style={{ left: "5%", fontSize: "5vw" }} transition={{ duration: 15 }} />
            <BackgroundIcon icon={faReact} style={{ left: "15%", fontSize: "5vw" }} transition={{ duration: 20 }} />
            <BackgroundIcon icon={faPhp} style={{ left: "25%", fontSize: "5vw" }} transition={{ duration: 18 }} />
            <BackgroundIcon icon={faCss3Alt} style={{ left: "35%", fontSize: "5vw" }} transition={{ duration: 28 }} />
            <BackgroundIcon icon={faSass} style={{ left: "45%", fontSize: "5vw" }} transition={{ duration: 25 }} />
            <BackgroundIcon icon={faHtml5} style={{ left: "55%", fontSize: "5vw" }} transition={{ duration: 14 }} />
            <BackgroundIcon icon={faLaravel} style={{ left: "65%", fontSize: "5vw" }} transition={{ duration: 21 }} />
            <BackgroundIcon icon={faDocker} style={{ left: "75%", fontSize: "5vw" }} transition={{ duration: 18 }} />
            <BackgroundIcon icon={faGitAlt} style={{ left: "85%", fontSize: "5vw" }} transition={{ duration: 22 }} />
        </div>
    );
};

export default BackgroundIcons;
