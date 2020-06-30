import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faUser, faCogs, faEye, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import './side-menu.styles.scss';

const SideMenu = () => {
    return (
        <div id="sideMenu">
            <Link to="/" className="logo">PB <span>Pawel Bak</span></Link>
            <nav>
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/about"><FontAwesomeIcon icon={faUser} /></Link>
                <Link to="/skills"><FontAwesomeIcon icon={faCogs} /></Link>
                <Link to="/portfolio"><FontAwesomeIcon icon={faEye} /></Link>
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /></Link>
            </nav>
            <ul>
                <li></li>
            </ul>
        </div>
    );
};

export default SideMenu;
