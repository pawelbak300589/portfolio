import React from 'react';

import './content.styles.scss';

const Content = ({ children, className }) => {
    return (
        <main className={className}>
            {children}
        </main>
    );
};

export default Content;
