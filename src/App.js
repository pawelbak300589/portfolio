import React from 'react';
import { Route, Router, Switch } from "react-router-dom";

import AboutPage from "./pages/about/about.component";
import HomePage from "./pages/home/home.component";
import SkillsPage from "./pages/skills/skills.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import ContactPage from "./pages/contact/contact.component";
import SideMenu from "./components/side-menu/side-menu.component";

import './App.css';

function App() {
    return (
        <div className="App">
            <SideMenu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/skills" component={SkillsPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/contact" component={ContactPage} />
            </Switch>
        </div>
    );
}

export default App;