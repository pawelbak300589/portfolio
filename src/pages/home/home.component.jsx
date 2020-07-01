import React from 'react';
import { motion } from "framer-motion";

import Content from "../../components/content/content.component";
import BackgroundIcons from "../../components/background-icons/background-icons.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import './home.styles.scss';

const HomePage = () => {
    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <Content className="home-page">
            <BackgroundIcons />
            <section>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    Hi, I'm <span style={{ color: "#b82967" }}>Pawel</span>,
                </motion.h1>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1
                    }}>
                    web developer from <span style={{ color: "#29b87a" }}>Chester</span>.
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 2
                    }}>
                    <small>PHP Developer / React & JavaScript Developer</small><br />
                    <CustomButton type="link" to="/contact" style={{display: "inline-block", marginTop: "15px"}}>Contact Me</CustomButton>
                </motion.p>
            </section>
        </Content>
    );
};

export default HomePage;
