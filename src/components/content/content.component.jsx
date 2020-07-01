import React from 'react';
import { motion } from "framer-motion";

import { pageTransition, pageVariants } from "../../helpers/page-transition.helper";

import './content.styles.scss';

const Content = ({ children, className }) => {
    return (
        <motion.main
            className={className}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            {children}
        </motion.main>
    );
};

export default Content;
