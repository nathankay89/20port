function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Connect with Me</h5>
                        <div className="social-icons">
                            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                            {/* Add links to other platforms (e.g., Stack Overflow, Twitter) as needed */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>Email: your.email@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        {/* Add more contact information as needed */}
                    </div>
                    <div className="col-md-4">
                        <h5>Third Platform</h5>
                        <a href="https://third-platform-profile" target="_blank" rel="noopener noreferrer">Third Platform Profile</a>
                        {/* Replace the link with the actual third platform profile link */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
