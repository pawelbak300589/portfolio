import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackgroundIcon = ({ icon, style, variants, transition }) => {
    const initialVariants = {
        animate: { opacity: [0.6, 0.1, 0.6, 0.1, 0.6], y: ["0vh", "110vh", "0vh"] },
        ...variants
    };
    return (
        <motion.span
            style={{
                position: "absolute",
                top: "-10vh",
                left: "10%",
                fontSize: 50,
                ...style
            }}
            animate="animate"
            variants={initialVariants}
            transition={{
                ease: "easeInOut",
                duration: 15,
                loop: Infinity,
                ...transition
            }}>
            <FontAwesomeIcon icon={icon} />
        </motion.span>
    );
};

export default BackgroundIcon;
