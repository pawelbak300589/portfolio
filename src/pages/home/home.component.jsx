import React from 'react';
import { motion } from "framer-motion";

import Content from "../../components/content/content.component";
import BackgroundIcons from "../../components/background-icons/background-icons.component";

import './home.styles.scss';

const HomePage = () => {
    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <Content className="home-page">
            <BackgroundIcons />
            <div className="content-wrapper">
                <header>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            repeatDelay: 3
                        }}>
                        Hi, I'm <span style={{color: "#b82967"}}>Pawel</span>,
                    </motion.h1>
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            repeatDelay: 3,
                            delay: 1
                        }}>
                        web developer from <span style={{color: "#29b87a"}}>Chester</span>.
                    </motion.h2>
                </header>
                <section>

                </section>
                <footer>

                </footer>
            </div>
        </Content>
    );
};

export default HomePage;
