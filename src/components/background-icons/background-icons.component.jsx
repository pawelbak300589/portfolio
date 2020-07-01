import React from 'react';
import { faJsSquare, faReact, faPhp, faCss3Alt, faSass, faHtml5, faGitAlt, faLaravel, faDocker } from "@fortawesome/free-brands-svg-icons";

import BackgroundIcon from "../background-icon/background-icon.component";

import './background-icons.styles.scss';

const BackgroundIcons = () => {
    return (
        <div className="home-background">
            <BackgroundIcon icon={faJsSquare} style={{ left: "9%", fontSize: "5vw" }} transition={{ duration: 15 }} />
            <BackgroundIcon icon={faReact} style={{ left: "18%", fontSize: "5vw" }} transition={{ duration: 20 }} />
            <BackgroundIcon icon={faPhp} style={{ left: "27%", fontSize: "5vw" }} transition={{ duration: 18 }} />
            <BackgroundIcon icon={faCss3Alt} style={{ left: "36%", fontSize: "5vw" }} transition={{ duration: 28 }} />
            <BackgroundIcon icon={faSass} style={{ left: "45%", fontSize: "5vw" }} transition={{ duration: 25 }} />
            <BackgroundIcon icon={faHtml5} style={{ left: "54%", fontSize: "5vw" }} transition={{ duration: 14 }} />
            <BackgroundIcon icon={faLaravel} style={{ left: "63%", fontSize: "5vw" }} transition={{ duration: 21 }} />
            <BackgroundIcon icon={faDocker} style={{ left: "72%", fontSize: "5vw" }} transition={{ duration: 18 }} />
            <BackgroundIcon icon={faGitAlt} style={{ left: "81%", fontSize: "5vw" }} transition={{ duration: 22 }} />
        </div>
    );
};

export default BackgroundIcons;
