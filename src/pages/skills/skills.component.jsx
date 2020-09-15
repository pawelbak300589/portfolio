import React, { useState } from 'react';
import { motion } from "framer-motion";

import Content from "../../components/content/content.component";
import Skill from "../../components/skill/skill.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import './skills.styles.scss';

const SkillsPage = () => {
    const [skill, setSkill] = useState('back');

    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    const renderSkills = () => {
        let skills;
        if (skill === 'front') {
            skills = <motion.div>
                <h2>Front End</h2>
                <p></p>
                <Skill number={4} name="JavaScript" />
                <Skill number={3} name="ReactJS" />
                <Skill number={4} name="HTML" />
                <Skill number={4} name="CSS & SASS" />
                <Skill number={3} name="jQuery" />
                <Skill number={1} name="VueJS" />
            </motion.div>;
        } else if (skill === 'back') {
            skills = <motion.div>
                <h2>Back End</h2>
                <p></p>
                <Skill number={3} name="NodeJS" />
                <Skill number={3} name="Express.js (NodeJS FW)" />
                <Skill number={4} name="PHP" />
                <Skill number={3} name="MySQL" />
                <Skill number={3} name="Phalcon (PHP FW)" />
                <Skill number={2} name="Laravel / Lumen (PHP FW)" />
            </motion.div>;
        } else if (skill === 'test') {
            skills = <>
                <h2>Testing</h2>
                <p></p>
                <div>
                    <Skill number={3} name="Jest" />
                    <Skill number={3} name="Codeception" />
                    <Skill number={2} name="PHPUnit" />
                    <Skill number={1} name="Moca" />
                    <Skill number={1} name="Chai" />
                    <Skill number={1} name="Sinon" />
                </div>
            </>;
        }

        return (
            <motion.aside
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                }}>
                {skills}
            </motion.aside>
        );
    };

    return (
        <Content className="skills-page">
            <section>
                <motion.article
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    <h1>Skills & Experience</h1>
                    <p>
                        I have a full-stack developer experience - check out my key skills below.
                    </p>
                    <p>
                        <CustomButton style={{ display: "inline-block", marginTop: "10px" }}
                                      className={`primary${skill === 'front' ? ' active' : ''}`}
                                      onClick={() => setSkill('front')}>Front End</CustomButton>
                        <CustomButton style={{ display: "inline-block", marginTop: "10px", marginLeft: "10px" }}
                                      className={`primary${skill === 'back' ? ' active' : ''}`}
                                      onClick={() => setSkill('back')}>Back End</CustomButton>
                        <CustomButton style={{ display: "inline-block", marginTop: "10px", marginLeft: "10px" }}
                                      className={`primary${skill === 'test' ? ' active' : ''}`}
                                      onClick={() => setSkill('test')}>Testing</CustomButton>
                    </p>
                </motion.article>
                {renderSkills()}
            </section>
        </Content>
    );
};

export default SkillsPage;
