import React from 'react';

import './skill.styles.scss';

const Skill = ({ number, name }) => {
    const renderBlocks = () => {
        let blocks = [];
        for (let i = 1; i < 5; i++) {
            blocks.push(<span className={`${(i <= number) ? 'active' : ''}`}>{''}</span>);
        }
        return blocks;
    };

    return (
        <div className="skill">
            <div className="blocks">
                {renderBlocks()}
            </div>
            <span>{name}</span>
        </div>
    );
};

export default Skill;
