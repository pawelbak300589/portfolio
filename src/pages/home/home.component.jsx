import React from 'react';
import { motion } from "framer-motion";
import {
    faJsSquare,
    faReact,
    faPhp,
    faCss3Alt,
    faSass,
    faHtml5,
    faGitAlt,
    faLaravel,
    faDocker
} from "@fortawesome/free-brands-svg-icons";

import Content from "../../components/content/content.component";
import BackgroundIcons from "../../components/background-icons/background-icons.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import './home.styles.scss';

const HomePage = () => {
    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    const icons = [
        { icon: faJsSquare, position: "5%", size: "5vw", duration: 15 },
        { icon: faReact, position: "15%", size: "5vw", duration: 20 },
        { icon: faPhp, position: "25%", size: "5vw", duration: 18 },
        { icon: faCss3Alt, position: "35%", size: "5vw", duration: 28 },
        { icon: faSass, position: "45%", size: "5vw", duration: 25 },
        { icon: faHtml5, position: "55%", size: "5vw", duration: 14 },
        { icon: faLaravel, position: "65%", size: "5vw", duration: 21 },
        { icon: faDocker, position: "75%", size: "5vw", duration: 18 },
        { icon: faGitAlt, position: "85%", size: "5vw", duration: 22 },
    ];

    return (
        <Content className="home-page">
            <BackgroundIcons icons={icons} />
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
                    <CustomButton type="link"
                                  to="/contact"
                                  style={{ display: "inline-block", marginTop: "18px" }}
                                  className={["primary"]}>Contact Me</CustomButton>
                </motion.p>
            </section>
        </Content>
    );
};

export default HomePage;
