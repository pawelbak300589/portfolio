import React from 'react';

import { timelineData } from "./timeline.data";

import './timeline.styles.scss';
import face2 from "../../assets/images/pawel2.jpg";
import face from "../../assets/images/pawel.jpg";
import { motion } from "framer-motion";

const Timeline = ({ onHover }) => {
    return (
        <div className="timeline">
            {
                timelineData.map(({ year, country, colour, image, title, subtitle, text }) => {
                    return <motion.div key={year} className="period"
                                       onMouseOver={() => onHover({
                                           title: title,
                                           subtitle: subtitle,
                                           text: text,
                                           image: image
                                       })}
                                       onMouseOut={() => onHover({ title: '', subtitle: '', text: '', image: '' })}
                                       whileHover={{ scale: 1.05, y: 5 }}>
                        <span className="year">{year}</span>
                        <img className="flag" src={country} alt="country flag" />
                        <img className="flag" src={colour} alt="school/work" />
                    </motion.div>;
                })
            }
        </div>
    );
};

export default Timeline;
