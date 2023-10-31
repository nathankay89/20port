// App.jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Switch>
                <Route path="/" exact component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </Router>
    );
}

export default App;
