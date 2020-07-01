import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AboutPage from "./pages/about/about.component";
import HomePage from "./pages/home/home.component";
import SkillsPage from "./pages/skills/skills.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import ContactPage from "./pages/contact/contact.component";
import SideMenu from "./components/side-menu/side-menu.component";

import './App.css';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <SideMenu />
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/skills" component={SkillsPage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;