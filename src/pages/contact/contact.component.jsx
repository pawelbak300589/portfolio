import React from 'react';
import { motion } from "framer-motion";

import Content from "../../components/content/content.component";


const ContactPage = () => {
    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <Content className="contact-page">
            {/*<UnderConstruction />*/}
            <section>
                <motion.article
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    <h1>Contact me</h1>
                    <p>
                        If you have great work opportunity or the other request/question, don't hesitate to contact me using details below:
                    </p>
                    <p>
                        <b>Email:</b> contact@pawelbak.me
                    </p>

                </motion.article>
            </section>
        </Content>
    );
};

export default ContactPage;
