import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={logoStyle}>
                Recruitment<span style={{ color: "#4CAF50" }}>Hub</span>
            </div>
            <div style={linkContainerStyle}>
                <a href="#about" style={linkStyle}>
                    About Us
                </a>
                <a href="#contact" style={linkStyle}>
                    Contact
                </a>
                <a href="#privacy" style={linkStyle}>
                    Privacy Policy
                </a>
                <a href="#terms" style={linkStyle}>
                    Terms of Service
                </a>
            </div>
            <div style={copyrightStyle}>
                © {new Date().getFullYear()} RecruitmentHub. All rights reserved.
            </div>
        </footer>
    );
};

// Define CSS styles with TypeScript
const footerStyle: React.CSSProperties = {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
};

const logoStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
};

const linkContainerStyle: React.CSSProperties = {
    marginBottom: "10px",
};

const linkStyle: React.CSSProperties = {
    color: "#4CAF50",
    textDecoration: "none",
    margin: "0 10px",
    transition: "color 0.3s",
};

const copyrightStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#aaa",
};

export default Footer;
