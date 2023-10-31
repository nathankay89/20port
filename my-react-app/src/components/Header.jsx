import { Link } from 'react-router-dom';
import '../assets/Header.css'
function Header() {
    return (
        <div className="header-container">
            <div className="custom-style">
                <h1>Nathan Farquhar-Kay</h1>
            </div>
            <ul className="navbar">
                <li className="nav-item">
                    <Link to="/aboutme" className="nav-link">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className="nav-link">Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
