function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="social-icons">
                            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                            {/* Add links to other platforms (e.g., Stack Overflow, Twitter) as needed */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <p>Email: Nathankay89@hotmail.com</p>
                        <p>Phone: +1 (249) 879-6351</p>
                        {/* Add more contact information as needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
