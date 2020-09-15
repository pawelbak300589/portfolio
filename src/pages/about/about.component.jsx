import React, { useState } from 'react';
import { motion } from "framer-motion";

import Content from "../../components/content/content.component";
import Timeline from "../../components/timeline/timeline.component";

import face from '../../assets/images/pawel.jpg';
import face2 from '../../assets/images/pawel2.jpg';
import './about.styles.scss';

const AboutPage = () => {
    const [timelinePeriodData, setTimelinePeriodData] = useState({ title: '', subtitle: '', text: '', image: '' });
    const { title, subtitle, text, image } = timelinePeriodData;

    const renderTitle = () => {
        return title ? title : 'About me';
    };

    const renderSubtitle = () => {
        return subtitle ? subtitle : '';
    };

    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    const renderText = () => {
        const initialText = [
            'An energetic, imaginative and fast learning Web Developer with over six years of experience in creating and developing websites at the highest standards and over sixteen years around matters of Information Technology.',
            'Passionate about new technologies, but also in love with outdoor activities like rock climbing, hiking and mountaineering.',
            'Interested in entire web development spectrum (from backend to frontend) and working alongside other ambitious IT professionals to learn more skills on everyday basis.'
        ];
        const finalText = (text instanceof Array) ? text : initialText;
        return finalText.map((paragraph, index) => {
            if (paragraph instanceof Array) {
                return <ul key={index}>
                    {
                        paragraph.map((listItem, itemIndex) => {
                            return <li key={itemIndex}>{listItem}</li>;
                        })
                    }
                </ul>;
            }
            return <p>{paragraph}</p>;
        });
    };

    const renderImage = () => {
        return image ?
            <img src={image} alt="Business logo" />
            : <img src={face2} alt="Pawel Bak"
                   onMouseOver={e => (e.currentTarget.src = face)}
                   onMouseOut={e => (e.currentTarget.src = face2)}
            />;
    };

    return (
        <Content className="about-page">
            <section>
                <Timeline onHover={(periodData) => setTimelinePeriodData(periodData)} />
                <motion.article
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    <h1>{renderTitle()}</h1>
                    {subtitle && <h2>{renderSubtitle()}</h2>}
                    {renderText()}
                </motion.article>
                <motion.aside
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    {renderImage()}
                </motion.aside>
            </section>
        </Content>
    );
};

export default AboutPage;
