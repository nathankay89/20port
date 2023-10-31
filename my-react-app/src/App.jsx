import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
    return (
      <div>
        <Router>
            <Header />
            <Navigation />
            <Routes> {/* Change 'Switch' to 'Routes' here */}
                <Route path="/" element={<AboutMe />} /> {/* Use 'element' instead of 'component' */}
                <Route path="/portfolio" element={<Portfolio />} /> {/* Use 'element' instead of 'component' */}
                <Route path="/contact" element={<Contact />} /> {/* Use 'element' instead of 'component' */}
                <Route path="/resume" element={<Resume />} /> {/* Use 'element' instead of 'component' */}
            </Routes>
        </Router>
        </div>
    );
}

export default App;
