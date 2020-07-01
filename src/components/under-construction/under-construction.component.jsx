import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWrench,
    faPencilRuler,
    faTools,
    faToolbox,
    faScrewdriver,
    faRuler,
    faHammer,
    faPaintRoller,
    faDraftingCompass,
    faRulerCombined
} from "@fortawesome/free-solid-svg-icons";

import BackgroundIcons from "../background-icons/background-icons.component";

import './under-construction.styles.scss';

const UnderConstruction = () => {
    const icons = [
        { icon: faWrench, position: "5%", size: "5vw", duration: 15 },
        { icon: faRulerCombined, position: "15%", size: "5vw", duration: 20 },
        { icon: faTools, position: "25%", size: "5vw", duration: 18 },
        { icon: faToolbox, position: "35%", size: "5vw", duration: 28 },
        { icon: faScrewdriver, position: "45%", size: "5vw", duration: 25 },
        { icon: faRuler, position: "55%", size: "5vw", duration: 14 },
        { icon: faHammer, position: "65%", size: "5vw", duration: 21 },
        { icon: faPaintRoller, position: "75%", size: "5vw", duration: 18 },
        { icon: faDraftingCompass, position: "85%", size: "5vw", duration: 22 },
    ];
    return (
        <>
            <BackgroundIcons icons={icons} />
            <section className="under-construction">
                <FontAwesomeIcon icon={faPencilRuler} />
                <h1>Page Under Construction</h1>
            </section>
        </>
    );
};

export default UnderConstruction;
